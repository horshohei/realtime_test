import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/realtime/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini-realtime-preview-2024-12-17",
            modalities: ["audio", "text"],
            instructions: "あなたは日本人向けのアシスタントです。指示がない限り、日本語で応答してください。",
            input_audio_noise_reduction: {
                type: "near_field",
            },
            input_audio_transcription: {
                language: "ja",
                model: "gpt-4o-mini-transcribe"
            }
        }),
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /session:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
