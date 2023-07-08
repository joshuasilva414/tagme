import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return <SignUp appearance={{
        elements: {
            rootBox: "flex justify-center align-middle py-5 h-screen w-screen",
            card: "max-h-[600px]"
        }
    }}/>;
}