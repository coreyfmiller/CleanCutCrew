"use client"

import { useState } from "react"
import { Phone, Mail, CheckCircle, Leaf, Trash2, Scissors } from "lucide-react"
import { Star, Menu, X, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "d14ef594-3c1e-4dae-92e9-44c28e5853fa"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("submitting")
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", WEB3FORMS_KEY)
    formData.append("subject", "New Quote Request - Clean Cut Crew")
    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        { method: "POST", body: formData }
      )
      const result = await response.json()
      if (result.success) {
        setFormStatus("success")
        form.reset()
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="w-[140px]" />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-3 w-[140px] justify-end">
            <Button asChild className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Get Free Quote</Link>
            </Button>
            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Services</Link>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Pricing</Link>
              <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">About</Link>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Contact</Link>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-grass.jpg" alt="Freshly mowed lawn in Quispamsis, New Brunswick" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Image src="/logo.png" alt="Clean Cut Crew - Lawn and Yard Services in Quispamsis NB" width={650} height={390} className="mx-auto mb-8 w-full max-w-lg lg:max-w-xl drop-shadow-2xl" priority />
            <h1 className="sr-only">Clean Cut Crew — Lawn Mowing and Yard Services in Quispamsis, New Brunswick</h1>
            <p className="text-2xl md:text-3xl text-white font-medium mb-8 text-pretty [text-shadow:_0_2px_12px_rgb(0_0_0_/_60%)]">
              Professional lawn mowing and yard services by Ryder, Aiden &amp; Jaxon.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-5 h-5 text-primary [filter:drop-shadow(0_1px_3px_rgb(0_0_0_/_40%))]" />
              <span className="text-white/90 text-lg [text-shadow:_0_1px_6px_rgb(0_0_0_/_50%)]">Serving Quispamsis, Rothesay, Hampton, Saint John &amp; area</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg">
                <Link href="#contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/80 text-white hover:bg-white/10 text-lg px-8 shadow-lg">
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-7 h-7 text-primary-foreground" />
            <span className="text-2xl md:text-3xl font-bold text-primary-foreground">SUMMER DEAL</span>
          </div>
          <p className="text-primary-foreground/90 mb-4 text-lg">Lawn mowing and trimming all summer — one flat rate, no surprises.</p>
          <div className="text-primary-foreground">
            <span className="text-5xl md:text-6xl font-bold">$900</span>
            <span className="text-xl ml-3">All Summer Long!</span>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Reliable lawn and yard care to keep your property looking sharp</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><Leaf className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">Lawn Mowing</h3>
                <p className="text-muted-foreground">Regular cuts to keep your grass at the perfect height all season</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><Scissors className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">Trimming &amp; Edging</h3>
                <p className="text-muted-foreground">Clean edges along walkways, fences, and garden beds</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">Yard Cleanup</h3>
                <p className="text-muted-foreground">General tidying and maintenance to keep your outdoor space in order</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"><Trash2 className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold">Garbage Can Cleaning</h4>
                    <p className="text-muted-foreground text-sm">We&#39;ll clean your garbage cans inside and out</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-2xl font-bold text-primary">$30</span>
                  <span className="text-muted-foreground"> / 2 bins</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Straightforward rates — no hidden fees, no contracts</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">BEST VALUE</div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Summer Package</h3>
                <p className="text-muted-foreground mb-4">Full-season lawn care, one flat rate</p>
                <div className="mb-6"><span className="text-5xl font-bold text-primary">$900</span><span className="text-muted-foreground">/season</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>Lawn mowing all summer</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>Trimming &amp; edging included</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>Regular scheduled visits</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>Satisfaction guaranteed</span></li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" asChild><Link href="#contact">Get This Deal</Link></Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Per-Visit Service</h3>
                <p className="text-muted-foreground mb-4">One-time or as-needed visits</p>
                <div className="mb-6"><span className="text-5xl font-bold text-primary">Custom</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>Free on-site estimate</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>One-time or recurring</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>Flexible scheduling</span></li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>No obligation</span></li>
                </ul>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" size="lg" asChild><Link href="#contact">Request a Quote</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Crew</h2>
            <p className="text-lg text-muted-foreground mb-8">We&#39;re Ryder, Aiden, and Jaxon — three guys passionate about keeping yards looking their best. We take pride in our work and treat every lawn like it&#39;s our own.</p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl font-bold text-primary">R</span></div>
                <h3 className="font-semibold text-lg">Ryder</h3>
                <a href="tel:506-333-6494" className="text-primary font-medium hover:underline">506-333-6494</a>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl font-bold text-primary">A</span></div>
                <h3 className="font-semibold text-lg">Aiden</h3>
                <a href="tel:506-566-5824" className="text-primary font-medium hover:underline">506-566-5824</a>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl font-bold text-primary">J</span></div>
                <h3 className="font-semibold text-lg">Jaxon</h3>
                <a href="tel:506-650-7074" className="text-primary font-medium hover:underline">506-650-7074</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Your Free Quote</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">We&#39;ll swing by and give you an honest estimate — no cost, no pressure. Serving Quispamsis, Rothesay, Hampton, Saint John, and parts of Kingston Peninsula.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">Request a Quote</h3>
                  {formStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-primary" /></div>
                      <h4 className="text-lg font-semibold mb-2">Quote Request Sent!</h4>
                      <p className="text-muted-foreground mb-6">We&#39;ll get back to you within a few hours.</p>
                      <Button variant="outline" onClick={() => setFormStatus("idle")} className="border-primary text-primary hover:bg-primary/10">Send Another Request</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your phone number" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email (optional)</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your email" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your yard</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Yard size, services needed, preferred schedule..." />
                      </div>
                      {formStatus === "error" && (<p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>)}
                      <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                        {formStatus === "submitting" ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>) : (<><Send className="w-4 h-4 mr-2" />Send Quote Request</>)}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-primary" /></div>
                      <div>
                        <h3 className="font-semibold mb-2">Call or Text</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Ryder: <a href="tel:506-333-6494" className="text-primary hover:underline">506-333-6494</a></p>
                          <p>Aiden: <a href="tel:506-566-5824" className="text-primary hover:underline">506-566-5824</a></p>
                          <p>Jaxon: <a href="tel:506-650-7074" className="text-primary hover:underline">506-650-7074</a></p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-primary" /></div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm">Use the form to send us a message — we&#39;ll get back to you quickly</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-primary" /></div>
                      <div>
                        <h3 className="font-semibold mb-2">Service Area</h3>
                        <p className="text-muted-foreground">Quispamsis, Rothesay, Hampton, Saint John, and parts of Kingston Peninsula — contact us for details</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-primary border-primary">
                  <CardContent className="p-6 text-center">
                    <p className="text-primary-foreground font-medium mb-1">Quick response guaranteed</p>
                    <p className="text-primary-foreground/80 text-sm">We typically get back to you within a few hours</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
            </nav>
            <div>
              <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Clean Cut Crew</p>
              <p className="text-muted-foreground text-xs mt-1">Lawn &amp; Yard Services in Quispamsis, Rothesay, Hampton, Saint John &amp; area, NB</p>
            </div>
            <p className="text-muted-foreground/60 text-xs">Built by <a href="https://fundylogic.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FundyLogic</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
