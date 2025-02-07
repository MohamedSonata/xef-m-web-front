'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Monitor, BookOpen, Building } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const useCases = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "IT Support & Management",
    description: "Remote device management and support for IT teams.",
    features: [
      "Real-time device monitoring",
      "Remote troubleshooting",
      "Software deployment",
      "Asset management"
    ],
    image: "/images/it-support.webp"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Education & Training",
    description: "Interactive learning and training solutions.",
    features: [
      "Interactive screen sharing",
      "Multi-device support",
      "Session recording",
      "Real-time collaboration"
    ],
    image: "/images/education.webp"
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Business Operations",
    description: "Streamline workflows and enhance productivity.",
    features: [
      "Team collaboration",
      "Process automation",
      "Performance monitoring",
      "Resource optimization"
    ],
    image: "/images/business.webp"
  }
];

export function UseCases() {
  return (
    <section className="py-20 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Use Cases
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover how Xefro Mirror can transform your business operations.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-[var(--card-purple)]/10 backdrop-blur-sm rounded-xl p-6 
                       transition-all duration-500
                       before:absolute before:inset-0 before:rounded-xl before:-z-10
                       before:bg-gradient-to-r before:from-transparent before:via-[var(--gradient-start)]/10 before:to-transparent
                       before:opacity-0 before:transition-opacity before:duration-500
                       hover:before:opacity-100
                       after:absolute after:inset-[1px] after:rounded-xl after:-z-10
                       after:bg-[var(--background)] after:transition-all
                       hover:shadow-[0_0_15px_-8px_var(--gradient-mid)]"
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="text-[var(--gradient-mid)] p-2 rounded-lg 
                              bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/5
                              transition-colors duration-300 
                              group-hover:from-[var(--gradient-start)]/20 group-hover:to-[var(--gradient-end)]/10
                              inline-block"
                  >
                    {useCase.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300
                             text-white group-hover:text-[var(--gradient-end)]">
                  {useCase.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">{useCase.description}</p>
                
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="text-sm text-[var(--text-secondary)] flex items-center gap-2
                               transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)]
                                   transition-transform duration-300 group-hover:scale-150" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 