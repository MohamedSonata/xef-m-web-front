import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("" || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
const chat = model.startChat();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let isAwaitingResponse = false; // Controls whether we are waiting for a response

async function askAndRespond() {
    if (isAwaitingResponse) {
        console.log("Please wait for the AI response to complete.");
        return;
    }

    rl.question("You: ", async (msg) => {
        if (msg.toLowerCase() === "exit") {
            rl.close();
            return;
        }

        isAwaitingResponse = true;
        let previousText = ""; // Used to prevent duplication

        try {
            const result = await chat.sendMessageStream(msg);
            process.stdout.write("AI: "); // Print AI label once

            for await (const chunk of result.stream) {
                const chunkText = chunk.text().trim(); // Trim to clean up extra spaces

                // 🔹 Prevent duplicate responses
                if (chunkText && chunkText !== previousText) {
                    process.stdout.write(chunkText + " "); // Use process.stdout.write() for continuous output
                    previousText = chunkText;
                }
            }

            console.log("\n"); // Ensure a new line after response completion
        } catch (error) {
            console.error("\nError: ", error);
        } finally {
            isAwaitingResponse = false;
            askAndRespond(); // Prompt for next input after AI finishes
        }
    });
}

askAndRespond(); // Start the chat loop
