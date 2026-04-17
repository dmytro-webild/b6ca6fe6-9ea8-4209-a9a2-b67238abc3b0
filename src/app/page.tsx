"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { BookOpen, Calendar, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "About", id: "#about" },
              { name: "Services", id: "#services" },
              { name: "Pricing", id: "#pricing" },
              { name: "Contact", id: "#contact" },
            ]}
            brandName="Private Chef"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogoBillboard
            logoText="Private Chef"
            background={{ variant: "gradient-bars" }}
            description="Transform your private dinner or event into a fine-dining masterpiece. I bring professional, personalized, and unforgettable flavors directly to your kitchen."
            buttons={[{ text: "Book a Consultation", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/chef-showing-his-fine-cuisine-professional-food-decoration_482257-10348.jpg"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            title="Crafting Flavors with Passion"
            description="Elevating home dining through Michelin-level technique and seasonal, farm-to-table ingredients."
            textboxLayout="split"
            bulletPoints={[
              { title: "Fine Dining", description: "Exclusive multi-course menus crafted for your home." },
              { title: "Professional Service", description: "We handle everything from shopping to kitchen cleanup." },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/chef-preparing-salad_23-2148145593.jpg"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardTwentyEight
            animationType="slide-up"
            textboxLayout="split"
            title="Bespoke Services"
            description="Tailored culinary solutions to suit your specific occasion and dietary preferences."
            features={[
              { id: "f1", title: "Fine Dining", subtitle: "Private Dinner", category: "Events", value: "From $300", buttons: [{ text: "Book", href: "#contact" }] },
              { id: "f2", title: "Masterclass", subtitle: "Learn the Craft", category: "Education", value: "From $500", buttons: [{ text: "Book", href: "#contact" }] },
              { id: "f3", title: "Events", subtitle: "Large Parties", category: "Catering", value: "Custom", buttons: [{ text: "Book", href: "#contact" }] },
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardEight
            animationType="slide-up"
            textboxLayout="split"
            title="Select Your Experience"
            description="Transparent pricing for exceptional quality."
            plans={[
              { id: "intimate", badge: "Popular", price: "$300+", subtitle: "Intimate Dinners", features: ["3-course meal", "Shopping", "Cleanup"], buttons: [{ text: "Book", href: "#contact" }] },
              { id: "gourmet", badge: "Premium", price: "$800+", subtitle: "Gourmet Party", features: ["5-course meal", "Staffing", "Cleanup"], buttons: [{ text: "Book", href: "#contact" }] },
            ]}
          />
        </div>

        <div id="menu" data-section="menu">
          <ProductCardThree
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            title="Sample Menu Highlights"
            description="A glimpse into our seasonal, fresh-sourced offerings."
            products={[
              { id: "p1", name: "Seared Scallops", price: "$45", imageSrc: "http://img.b2bpic.net/free-photo/plate-with-cutlery-well-decorated-with-napkin-tied-with-golden-bow_1220-609.jpg" },
              { id: "p2", name: "Lamb Rack", price: "$65", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-professional-chefs-working-together_23-2151232213.jpg" },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Guest Reviews"
            description="Memorable experiences delivered every time."
            kpiItems={[{ value: "100%", label: "Satisfaction" }, { value: "500+", label: "Events" }, { value: "10/10", label: "Ratings" }]}
            testimonials={[
              { id: "t1", name: "Sarah Miller", role: "Host", company: "Corporate", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-couple-celebrating-valentine-s-day-while-having-lunch-wine-together_23-2149216157.jpg" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            title="Book Your Chef"
            description="Ready to plan your next event? Fill out the details below and let's get started."
            inputPlaceholder="Enter your email"
            buttonText="Get Started"
            imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-man-kitchen_23-2149631673.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Private Chef"
            columns={[
              { title: "Menu", items: [{ label: "About", href: "#about" }, { label: "Services", href: "#services" }] },
              { title: "Support", items: [{ label: "Contact", href: "#contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}