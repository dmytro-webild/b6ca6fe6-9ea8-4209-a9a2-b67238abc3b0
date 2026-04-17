"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { BookOpen, Calendar, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Private Chef"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Exquisite Culinary Experiences in Your Home"
      description="Transform your private dinner or event into a fine-dining masterpiece. I bring professional, personalized, and unforgettable flavors directly to your kitchen."
      buttons={[
        {
          text: "Book a Consultation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-showing-his-fine-cuisine-professional-food-decoration_482257-10348.jpg?_wi=1"
      imageAlt="Professional private chef at work"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-chef-plating-meal_23-2148794096.jpg",
          alt: "High angle chef plating meal",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-cook-preparing-food-inside-kitchen-food-meal-fry-cook_140725-26010.jpg",
          alt: "A front view cook preparing food inside kitchen food meal fry cook",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-chef-cooking_23-2148471871.jpg",
          alt: "Close-up chef cooking",
        },
        {
          src: "http://img.b2bpic.net/free-photo/chef-preparing-fried-fish-front-view_23-2148516904.jpg",
          alt: "Chef preparing fried fish front view",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-chef-preparing-food-kitchen_23-2149727960.jpg",
          alt: "Professional chef preparing food in the kitchen",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Michelin Trained",
        },
        {
          type: "text",
          text: "Seasonal Ingredients",
        },
        {
          type: "text",
          text: "Farm to Table",
        },
        {
          type: "text",
          text: "Private Events",
        },
        {
          type: "text",
          text: "Cooking Classes",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Crafting Flavors with Passion",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/chef-preparing-salad_23-2148145593.jpg",
          alt: "Chef detailing plate",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Fine Dining",
          description: "Multi-course chef's table experience for intimate gatherings.",
          bentoComponent: "reveal-icon",
          icon: Star,
          imageSrc: "http://img.b2bpic.net/free-photo/atmosphere-kitchen-cafe-process_1321-4218.jpg",
          imageAlt: "atmosphere in the kitchen of the cafe Process",
        },
        {
          title: "Private Cooking Classes",
          description: "Hands-on culinary guidance for individuals or small groups.",
          bentoComponent: "reveal-icon",
          icon: BookOpen,
          imageSrc: "http://img.b2bpic.net/free-photo/chef-showing-his-fine-cuisine-professional-food-decoration_482257-10348.jpg?_wi=2",
          imageAlt: "atmosphere in the kitchen of the cafe Process",
        },
        {
          title: "Event Catering",
          description: "Seamless service for luxury parties and corporate events.",
          bentoComponent: "reveal-icon",
          icon: Calendar,
          imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-salad_23-2148145593.jpg",
          imageAlt: "atmosphere in the kitchen of the cafe Process",
        },
      ]}
      title="Bespoke Services"
      description="Tailored culinary solutions to suit your specific occasion and dietary preferences."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "intimate",
          name: "Intimate Dinner",
          price: "$300+",
          features: [
            "3-course meal",
            "Grocery shopping included",
            "Kitchen cleanup",
          ],
          buttons: [
            {
              text: "Choose",
              href: "#contact",
            },
          ],
        },
        {
          id: "gourmet",
          name: "Gourmet Party",
          price: "$800+",
          features: [
            "5-course meal",
            "Wine pairing",
            "Service staff",
          ],
          buttons: [
            {
              text: "Choose",
              href: "#contact",
            },
          ],
        },
        {
          id: "masterclass",
          name: "Masterclass",
          price: "$500+",
          features: [
            "3-hour session",
            "Ingredients included",
            "Chef's apron",
          ],
          buttons: [
            {
              text: "Choose",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Select Your Experience"
      description="Transparent pricing for exceptional quality."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Seared Scallops",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-cutlery-well-decorated-with-napkin-tied-with-golden-bow_1220-609.jpg",
        },
        {
          id: "p2",
          name: "Herb-Crusted Rack of Lamb",
          price: "$65",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-professional-chefs-working-together_23-2151232213.jpg",
        },
        {
          id: "p3",
          name: "Truffle Risotto",
          price: "$35",
          imageSrc: "http://img.b2bpic.net/free-photo/catering-different-foods_1157-183.jpg",
        },
        {
          id: "p4",
          name: "Duck Confit",
          price: "$55",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-dining-table-with-plates-details_23-2148848673.jpg",
        },
        {
          id: "p5",
          name: "Fresh Berry Tart",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-cooking-together_23-2150405875.jpg",
        },
        {
          id: "p6",
          name: "Lobster Bisque",
          price: "$40",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-caramel-vanilla-cupcakes-served-confectionery-copyspace-food-sugar-dessert-sweet-tasty-concept_7502-5463.jpg",
        },
      ]}
      title="Sample Menu Highlights"
      description="A glimpse into our seasonal, fresh-sourced offerings."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Party Host",
          testimonial: "An incredible experience, our guests were blown away.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-celebrating-valentine-s-day-while-having-lunch-wine-together_23-2149216157.jpg",
        },
        {
          id: "t2",
          name: "Mark Stevens",
          role: "CEO",
          testimonial: "Perfectly executed service for our team dinner.",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-chef-happy-expression_1194-1320.jpg",
        },
        {
          id: "t3",
          name: "Elena Rodriguez",
          role: "Foodie",
          testimonial: "The best meal I have ever had at home.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-hand-blond-woman-table_23-2148024532.jpg",
        },
        {
          id: "t4",
          name: "David Kim",
          role: "Parent",
          testimonial: "Professional, clean, and delicious. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517411.jpg",
        },
        {
          id: "t5",
          name: "Jenna Foster",
          role: "Hostess",
          testimonial: "Wonderful atmosphere and even better food.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-hands-with-her-lover_23-2148060335.jpg",
        },
      ]}
      title="What Guests Are Saying"
      description="Memorable experiences delivered every time."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Chef"
      description="Ready to plan your next event? Fill out the details below and let's get started."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your event...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-man-kitchen_23-2149631673.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
      ]}
      logoText="Private Chef"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
