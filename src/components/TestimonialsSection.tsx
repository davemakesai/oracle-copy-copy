"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import patient1 from '@/assets/patient-1.jpg';
import patient2 from '@/assets/patient-2.jpg';
import patient3 from '@/assets/patient-3.jpg';
import patient4 from '@/assets/patient-4.jpg';
import patient5 from '@/assets/patient-5.jpg';
import patient6 from '@/assets/patient-6.jpg';
import patient7 from '@/assets/patient-7.jpg';

const testimonials = [
  {
    text: "The team at Oracle Physiotherapy helped me recover from my knee injury faster than I expected. Their personalized approach made all the difference.",
    image: patient1,
    name: "Priya Sharma",
    role: "Patient, Surat",
  },
  {
    text: "Professional, caring, and highly effective. I can now enjoy my daily activities without pain thanks to their excellent treatment.",
    image: patient2,
    name: "Rajesh Patel",
    role: "Patient, Gandhinagar",
  },
  {
    text: "Outstanding physiotherapy services! The modern equipment and expert guidance helped me return to sports quicker than anticipated.",
    image: patient3,
    name: "Anita Desai",
    role: "Patient, Surat",
  },
  {
    text: "After my workplace injury, I thought I'd never be pain-free again. The expert care here proved me wrong. Truly life-changing!",
    image: patient4,
    name: "Dhansukhlal",
    role: "Patient, Surat",
  },
  {
    text: "The physiotherapy sessions helped me regain my mobility after surgery. The staff is incredibly knowledgeable and supportive.",
    image: patient5,
    name: "Meera Joshi",
    role: "Patient, UAE",
  },
  {
    text: "As an athlete, finding the right physiotherapy was crucial. Their sports-specific approach got me back to peak performance.",
    image: patient6,
    name: "Arjun Kumar",
    role: "Patient, Rajasthan",
  },
  {
    text: "Excellent service and genuine care. The treatment plan was tailored perfectly to my needs. Highly recommend to everyone!",
    image: patient7,
    name: "Kavya Patel",
    role: "Patient, Rajkot",
  },
  {
    text: "The personalized care I received was exceptional. My recovery from a shoulder injury was much quicker than I anticipated, thanks to their expert guidance.",
    image: "https://plus.unsplash.com/premium_photo-1679440414935-855a10bb95a8?q=80&w=688&auto=format&fit=crop",
    name: "Aarav Singh",
    role: "Patient, Mumbai",
  },
  {
    text: "I highly recommend Oracle Physiotherapy. They helped me regain full mobility after my knee surgery. The therapists are truly dedicated and supportive.",
    image: "https://images.unsplash.com/photo-1654097115079-5747760e96e0?q=80&w=682&auto=format&fit=crop",
    name: "Diya Sharma",
    role: "Patient, Delhi",
  },
  {
    text: "As an athlete, getting back to peak performance was my priority. Their sports physiotherapy program was top-notch, focusing on both recovery and prevention.",
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop",
    name: "Kabir Khan",
    role: "Patient, Bangalore",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 7);
const thirdColumn = testimonials.slice(7, 10);


const TestimonialsSection = () => {
  return (
    <section className="bg-subtle-background py-20 relative overflow-hidden">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[700px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-brand-primary/10 text-brand-primary py-1 px-4 rounded-full font-inter text-sm font-medium">Testimonials</div>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Happy Patients, Happy Lives :)
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our patients have to say about their journey to recovery and wellness.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          {thirdColumn.length > 0 && (
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;