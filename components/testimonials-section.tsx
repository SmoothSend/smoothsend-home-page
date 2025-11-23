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
  }
]

export function TestimonialsSection() {
  const testimonial = testimonials[0]

  return (
    <section id="testimonials" className="py-20 relative z-10">
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
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="w-6 h-6 text-primary" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {testimonial.isRealTweet && (
                        <a
                          href={testimonial.tweetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-medium hover:bg-blue-500/20 transition-colors"
                        >
                          View Tweet
                        </a>
                      )}
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {testimonial.chain}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
