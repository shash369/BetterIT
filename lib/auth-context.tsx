import { createContext,useContext,type ReactNode,} from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "./appwrite";

type AuthContextType = {
  signIn: (email: string,password: string) => Promise<string | null>;
  signUp: (email: string,password: string) => Promise<string | null>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children,}: {children:ReactNode;}) {
  
  const signIn = async (email: string,password: string):Promise<string|null> => {
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      return null;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      }
      return "Something went wrong during sign in.";
    }
  };

  const signUp = async (email: string,password: string):Promise<string | null> => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
      });
      // Sign in only after account creation succeeds.
      const signInError = await signIn(email, password);

      if (signInError !== null) {
        return signInError;
      }
      return null;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      }
      return "Something went wrong during sign up.";
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "UseAuth must be used within AuthProvider"
    );
  }

  return context;
}
