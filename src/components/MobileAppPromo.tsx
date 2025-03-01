
import { Button } from "@/components/ui/button";

export function MobileAppPromo() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-dubizzle-red/10 to-dubizzle-red/5 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text content */}
            <div className="p-8 md:p-12 lg:p-16 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the dubizzle App</h2>
              <p className="text-dubizzle-text-gray mb-6">
                Browse, chat, and sell on the go with our mobile app. Experience the full power of dubizzle in your pocket.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md h-auto"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5753 14.6634L20.5419 11.6967L14.8595 8L11.9428 10.9667L17.5753 14.6634ZM8.97677 22L15.1086 15.88L9.54844 12.2167L3.41699 18.3333L8.97677 22ZM22.5836 8.97673L21.0586 7.45173C20.6336 7.02673 19.9086 7.02673 19.4836 7.45173L18.3169 8.61839L21.4169 11.7184L22.5836 10.5517C23.0086 10.1267 23.0086 9.40173 22.5836 8.97673ZM1.41699 22.6667L7.87677 20.8667L2.45177 15.4417L1.41699 22.6667Z"/>
                  </svg>
                  Download on App Store
                </Button>
                <Button
                  className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md h-auto"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22.5C11.3203 22.5 10.6406 22.4531 9.96094 22.3594L13.2656 19.0547L17.6719 21.1172C16.0781 22.0547 14.0859 22.5 12 22.5ZM22.0312 19.9219C21.75 19.4062 21.3281 18.9844 20.8125 18.7031L16.3594 16.5938L20.1562 12.7969L22.3594 16.125C23.0156 17.2969 22.8984 18.75 22.0312 19.9219ZM19.6641 11.25L12 3.60938L13.5 2.10938C14.7422 0.867188 16.6641 0.867188 17.9062 2.10938L21.8906 6.09375C23.1328 7.33594 23.1328 9.24219 21.8906 10.5L19.6641 11.25ZM3.23438 21.9141L8.10938 15.0469L11.25 18.1875L4.38281 25.0547C3.51562 24.7734 2.81719 24.0469 2.53594 23.1797C2.30156 22.7344 2.27344 22.3125 2.27344 21.9141H3.23438ZM1.5 18C1.5 15.9141 1.96875 13.9219 2.88281 12.3281L4.96875 16.7578L1.64062 20.0391C1.57031 19.3594 1.5 18.6797 1.5 18ZM11.25 3.60938L16.4062 8.76562L11.25 13.9219L6.09375 8.76562L11.25 3.60938ZM3.84375 7.33594L7.64062 11.1328L3.1875 15.5625C2.88281 15.0469 2.4375 14.625 1.96875 14.3438C1.07812 13.7344 1.03125 12.2344 1.64062 11.0625L3.84375 7.33594Z"/>
                  </svg>
                  Download on Google Play
                </Button>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-dubizzle-text-gray">4.8 stars from 10,000+ reviews</p>
                </div>
              </div>
            </div>
            
            {/* App image */}
            <div className="relative w-full max-w-sm md:max-w-md h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&q=75&fit=crop&crop=right"
                alt="dubizzle Mobile App"
                className="absolute bottom-0 right-0 max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
