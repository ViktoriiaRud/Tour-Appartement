import connectDB from "@/config/database";

export const GET = async (request: string) => {
try {
    await connectDB();
    return new Response(JSON.stringify({message: "Hello!"}), {status: 200});
} catch (error) {
    return new Response('Wrong', {status: 500});
};
}