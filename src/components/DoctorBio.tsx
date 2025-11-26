import doctorImage from '@/assets/AmitMehta-main.jpg';

const DoctorBio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={doctorImage}
                alt="Dr. Amit Mehta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Meet Dr. Amit Mehta, <span className="text-brand-accent">B.P.T</span>
            </h2>
            <div className="font-inter text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Practicing in the field of physiotherapy since 2013, Dr. Amit Mehta brings over a decade of dedicated experience. He honed his skills as an assistant physiotherapist from 2014 to 2019 at Asutosh Hospital, a renowned orthopedic hospital in Surat.
              </p>
              <p>
                In 2019, he founded Oracle Physiotherapy in the Adajan/Pal area with a clear mission: to provide the best healthcare services to everyone at affordable rates. He exclusively practices in orthopedic physiotherapy and has successfully treated more than 5000 patients, with extensive experience in post-operative cases like ligament injuries, fractures, and trauma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorBio;