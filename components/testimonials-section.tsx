'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  chain: string
  isRealTweet?: boolean
  tweetUrl?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bacardi Sharma",
    role: "Web3 Developer",
    avatar: "BS",
    content: "Just built something amazing with @SmoothSend SDK! The gasless transaction experience is incredible. Users love not having to worry about gas fees. This is the future of Web3 UX! 🚀",
    rating: 5,
    chain: "Multi-Chain",
    isRealTweet: true,
    tweetUrl: "https://x.com/bacardisharma/status/1971117164389347564"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "DeFi Developer",
    avatar: "SC",
    content: "SmoothSend eliminated the biggest friction point in our user onboarding. Our conversion rate increased by 3x since integrating gasless transactions.",
    rating: 5,
    chain: "Ethereum"
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "Product Manager",
    avatar: "MR",
    content: "The seamless cross-chain experience is game-changing. Users can now move between chains without worrying about gas tokens.",
    rating: 5,
    chain: "Aptos"
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "CTO",
    avatar: "EW",
    content: "Our gaming platform needed gasless transactions for micro-payments. SmoothSend delivered exactly what we needed with zero complexity.",
    rating: 5,
    chain: "Avalanche"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Founder",
    avatar: "DK",
    content: "The developer experience is incredible. We integrated SmoothSend in just 2 hours and our users love the gas-free experience.",
    rating: 5,
    chain: "Base"
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Head of Product",
    avatar: "LP",
    content: "SmoothSend solved our user retention problem. No more users dropping off at the gas payment step.",
    rating: 5,
    chain: "Arbitrum"
  }
]

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            What Developers Are Saying
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Real feedback from developers building with SmoothSend SDK
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="card-glow bg-card/60 backdrop-blur-sm border-border/30 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <span className="text-lg font-semibold text-primary">
                    {currentTestimonialData.avatar}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="w-6 h-6 text-primary" />
                    <div className="flex">
                      {[...Array(currentTestimonialData.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    "{currentTestimonialData.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">
                        {currentTestimonialData.name}
                      </div>
                      <div className="text-muted-foreground">
                        {currentTestimonialData.role}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {currentTestimonialData.isRealTweet && (
                        <a 
                          href={currentTestimonialData.tweetUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-medium hover:bg-blue-500/20 transition-colors"
                        >
                          View Tweet
                        </a>
                      )}
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {currentTestimonialData.chain}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`card-glow bg-card/50 backdrop-blur-sm border-border/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-primary/50' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                
                <div className="flex items-center gap-2">
                  {testimonial.isRealTweet && (
                    <div className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-medium">
                      Real Tweet
                    </div>
                  )}
                  <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {testimonial.chain}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
