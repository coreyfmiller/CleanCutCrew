import { Phone, Mail, CheckCircle, Leaf, Trash2, Scissors, Star, Clock, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="w-[120px]" />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">Get Free Quote</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-grass.jpg"
            alt="Lush green lawn"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-8wG8SKQ5cPCbnFV9l7tikFu0kH88p5.png"
              alt="Clean Cut Crew - Lawn & Yard Services by Ryder, Aiden & Jaxon"
              width={650}
              height={390}
              className="mx-auto mb-8 w-full max-w-lg lg:max-w-xl"
              priority
            />
            <p className="text-2xl md:text-3xl text-white font-medium mb-8 text-pretty drop-shadow-lg">
              Professional lawn mowing and yard services by Ryder, Aiden & Jaxon. 
              Friendly local service with affordable prices and satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <Link href="#contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Deal Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 text-primary-foreground" />
              <span className="text-2xl md:text-3xl font-bold text-primary-foreground">SUMMER DEAL</span>
            </div>
            <div className="text-primary-foreground">
              <span className="text-4xl md:text-5xl font-bold">$900</span>
              <span className="text-lg ml-2">All Summer Long!</span>
            </div>
            <p className="text-primary-foreground/90 max-w-xs">
              Includes lawn mowing and whipper snipping all summer long!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional lawn and yard care services to keep your property looking its best
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lawn Mowing</h3>
                <p className="text-muted-foreground">
                  Professional lawn cutting to keep your grass at the perfect height
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Whipper Snipping</h3>
                <p className="text-muted-foreground">
                  Edge trimming for a clean, polished look around borders and obstacles
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Yard Care</h3>
                <p className="text-muted-foreground">
                  Clean & professional yard care to maintain your outdoor space
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trash Bin Service</h3>
                <p className="text-muted-foreground">
                  $30 for 2 trash bins - we&apos;ll take them to the curb and back
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Transparent, affordable pricing for all your lawn care needs
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                BEST VALUE
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Summer Package</h3>
                <p className="text-muted-foreground mb-4">All summer lawn care</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">$900</span>
                  <span className="text-muted-foreground">/season</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Lawn mowing all summer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Whipper snipping included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Regular scheduled visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Satisfaction guaranteed</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" asChild>
                  <Link href="#contact">Get This Deal</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Custom Pricing</h3>
                <p className="text-muted-foreground mb-4">One-time or custom service</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">Free</span>
                  <span className="text-muted-foreground"> Quote</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Free on-site assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>One-time service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Custom scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>No obligation</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" size="lg" asChild>
                  <Link href="#contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trash Bin Add-on */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="bg-secondary border-border">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Trash Bin Service Add-on</h4>
                    <p className="text-muted-foreground text-sm">We&apos;ll handle your bins on collection day</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-2xl font-bold text-primary">$30</span>
                  <span className="text-muted-foreground"> for 2 bins</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Clean Cut Crew?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Friendly Local Service</h3>
              <p className="text-muted-foreground text-sm">
                We&apos;re your neighbors, dedicated to keeping our community beautiful
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Affordable Prices</h3>
              <p className="text-muted-foreground text-sm">
                Quality lawn care that won&apos;t break the bank
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-muted-foreground text-sm">
                We show up on time and get the job done right
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground text-sm">
                We&apos;re not happy until you&apos;re happy with the results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Crew</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re Ryder, Aiden, and Jaxon – three hardworking young adults passionate about 
              keeping your yard looking its best. We take pride in our work and treat every lawn 
              like it&apos;s our own.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">R</span>
                </div>
                <h3 className="font-semibold text-lg">Ryder</h3>
                <a href="tel:506-333-6494" className="text-primary font-medium hover:underline">506-333-6494</a>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">A</span>
                </div>
                <h3 className="font-semibold text-lg">Aiden</h3>
                <a href="tel:506-566-5824" className="text-primary font-medium hover:underline">506-566-5824</a>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">J</span>
                </div>
                <h3 className="font-semibold text-lg">Jaxon</h3>
                <a href="tel:506-650-7074" className="text-primary font-medium hover:underline">506-650-7074</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Contact Ryder, Aiden & Jaxon Today!
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Get your free quote – we&apos;ll come look at your lawn for free!
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-foreground mb-2">Call Us</h3>
                  <div className="space-y-1 text-primary-foreground/90">
                    <p>Ryder: <a href="tel:506-333-6494" className="hover:underline">506-333-6494</a></p>
                    <p>Aiden: <a href="tel:506-566-5824" className="hover:underline">506-566-5824</a></p>
                    <p>Jaxon: <a href="tel:506-650-7074" className="hover:underline">506-650-7074</a></p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-foreground mb-2">Email Us</h3>
                  <a 
                    href="mailto:c.c.crew.mowing@gmail.com" 
                    className="text-primary-foreground/90 hover:underline break-all"
                  >
                    c.c.crew.mowing@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              asChild
            >
              <a href="mailto:c.c.crew.mowing@gmail.com?subject=Free%20Quote%20Request">
                Request Your Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Clean Cut Crew. Lawn & Yard Services by Ryder, Aiden & Jaxon.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:c.c.crew.mowing@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <a href="tel:506-333-6494" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
