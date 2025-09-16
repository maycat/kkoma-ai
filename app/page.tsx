import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export default function KkomaLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* App Icon */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-3xl overflow-hidden">
              <img src="/images/kkoma-logo.png" alt="Kkoma App Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/images/kkoma-text-logo.png" alt="Kkoma Logo" className="h-16 object-contain" />
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-base font-bold rounded-lg transition-colors duration-200 min-w-[200px]"
            >
              <Apple className="w-5 h-5 mr-2" />
              Download for Mac
            </Button>
            {/* <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200 min-w-[200px]"
            >
              <Monitor className="w-5 h-5 mr-2" />
              Download for Windows
            </Button> */}
          </div>

          <div className="flex justify-center pt-1">
            <span className="text-red-500 text-sm font-medium">pre-release</span>
          </div>

          {/* Introduction Content */}
          <div className="pt-16"></div>
        </div>
      </main>

      <div className="text-black w-full py-16" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-left">
            <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mb-6">
              <strong>Kkoma (Korean: 꼬마, "little one")</strong> is a <strong>desktop companion</strong> inspired by
              the tradition of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ukagaka"
                className="text-blue-600 hover:text-blue-800 underline font-bold"
              >
                Ukagaka
              </a>
              , reimagined for the modern workspace.
            </p>

            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-800">
                  <strong>Cute characters</strong> that lives on your desktop
                </span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-800">
                  <strong>Speech bubbles</strong> showing status, thoughts, and messages
                </span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-800">
                  <strong>Emotions</strong> that reflect activity
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-800">
                  <strong>Agent integration</strong> with tools: Claude Code
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              Kkoma is more than just a mascot. It's a <strong>shell</strong> that makes your <strong>ghost</strong>{" "}
              (your AI agents) visible, personable, and playful — turning background processes into companions you can
              see, feel, and interact with.
            </p>
          </div>
        </div>
      </div>

      {/* Acknowledgments Section */}
      <div className="text-black w-full py-16" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-black mb-6">Acknowledgments</h2>

            <h3 className="text-xl font-semibold text-black mb-4">Coding Agents</h3>
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">
                  This project was mostly built with <code className="bg-gray-200 px-1 rounded">Claude Code</code>,
                  which handled most of the heavy lifting.
                </span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">
                  Big thanks to the Anthropic team for making such a powerful tool available.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">
                  I might give <code className="bg-gray-200 px-1 rounded">jules</code> a spin later on too, just to see
                  what it's like 🙂
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-black mb-4">Image Generation Models</h3>
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">
                  The <strong>app logo</strong> and <strong>Yuja character sprites</strong> were created with{" "}
                  <code className="bg-gray-200 px-1 rounded">Google AI Studio (Nano Banana)</code>.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-black">
                  Of course, all the painful manual touch-ups afterwards shall remain a secret 😢
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-[60]">
        <img src="/images/kkoma-ghost.png" alt="Kkoma Ghost" className="h-16 object-contain" />
      </div>

      <div className="fixed bottom-8 right-4 z-50">
        <img src="/images/yuja-character.png" alt="Yuja Character" className="h-32 object-contain" />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black h-8 flex items-center px-4 z-50">
        <div className="flex-1"></div>
        <div className="flex items-center gap-2 mr-4">
          <img src="/images/kkoma-logo-white.png" alt="Kkoma" className="h-5 object-contain" />
        </div>
      </div>
    </div>
  )
}
