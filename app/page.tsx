import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export default function KkomaLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center space-y-6 md:space-y-8">
          {/* App Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl overflow-hidden">
              <img src="/images/kkoma-logo.png" alt="Kkoma App Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/images/kkoma-text-logo.png" alt="Kkoma Logo" className="h-12 md:h-16 object-contain" />
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8">
            <a
              href="https://github.com/maycat/kkoma-ai/releases/tag/v1.0.2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 md:px-8 py-3 text-sm md:text-base font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto sm:min-w-[200px]"
              >
                <Apple className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Download for Mac
              </Button>
            </a>
          </div>

          <div className="flex justify-center pt-1">
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-xs md:text-sm font-medium">pre-release (v1.0.2)</span>
              <a
                href="https://github.com/maycat/kkoma-ai/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Introduction Content */}
      <div className="w-full py-8 md:py-16" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-left">
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-4 md:mb-6" style={{ color: "#000000" }}>
              <strong style={{ color: "#000000" }}>Kkoma (Korean: 꼬마, "little one")</strong> is a{" "}
              <strong style={{ color: "#000000" }}>desktop companion</strong> inspired by the tradition of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ukagaka"
                className="text-blue-600 hover:text-blue-800 underline font-bold"
              >
                Ukagaka
              </a>
              , reimagined for the modern workspace.
            </p>

            <div className="mb-4 md:mb-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  <strong style={{ color: "#000000" }}>Cute characters</strong> that lives on your desktop
                </span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  <strong style={{ color: "#000000" }}>Speech bubbles</strong> showing status, thoughts, and messages
                </span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  <strong style={{ color: "#000000" }}>Emotions</strong> that reflect activity
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  <strong style={{ color: "#000000" }}>Agent integration</strong> with tools: Claude Code
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed max-w-4xl" style={{ color: "#000000" }}>
              Kkoma is more than just a mascot. It's a <strong style={{ color: "#000000" }}>shell</strong> that makes
              your <strong style={{ color: "#000000" }}>ghost</strong> (your AI agents) visible, personable, and playful
              — turning background processes into companions you can see, feel, and interact with.
            </p>
          </div>
        </div>
      </div>

      {/* Acknowledgments Section */}
      <div className="w-full py-8 md:py-16" style={{ backgroundColor: "#f3f4f6" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: "#000000" }}>
              Acknowledgments
            </h2>

            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4" style={{ color: "#000000" }}>
              Coding Agents
            </h3>
            <div className="mb-4 md:mb-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  This project was mostly built with{" "}
                  <code className="bg-gray-200 px-1 rounded text-xs md:text-sm">Claude Code</code>, which handled most
                  of the heavy lifting.
                </span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  Big thanks to the Anthropic team for making such a powerful tool available.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  I might give <code className="bg-gray-200 px-1 rounded text-xs md:text-sm">jules</code> a spin later
                  on too, just to see what it's like 🙂
                </span>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4" style={{ color: "#000000" }}>
              Image Generation Models
            </h3>
            <div className="mb-4 md:mb-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  The <strong style={{ color: "#000000" }}>app logo</strong> and{" "}
                  <strong style={{ color: "#000000" }}>Yuja character sprites</strong> were created with{" "}
                  <code className="bg-gray-200 px-1 rounded text-xs md:text-sm">Google AI Studio (Nano Banana)</code>.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#000000" }}></div>
                <span className="text-sm md:text-base" style={{ color: "#000000" }}>
                  Of course, all the painful manual touch-ups afterwards shall remain a secret 😢
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-2 md:bottom-4 left-2 md:left-4 z-[60]">
        <img src="/images/kkoma-ghost.png" alt="Kkoma Ghost" className="h-12 md:h-16 object-contain" />
      </div>

      <div className="fixed bottom-4 md:bottom-8 right-2 md:right-4 z-50">
        <img src="/images/yuja-character.png" alt="Yuja Character" className="h-20 md:h-32 object-contain" />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black h-6 md:h-8 flex items-center px-2 md:px-4 z-50">
        <div className="flex-1"></div>
        <div className="flex items-center gap-2 mr-2 md:mr-4">
          <img src="/images/kkoma-logo-white.png" alt="Kkoma" className="h-4 md:h-5 object-contain" />
        </div>
      </div>
    </div>
  )
}
