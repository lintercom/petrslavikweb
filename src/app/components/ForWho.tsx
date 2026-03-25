import { Users, Briefcase, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const targetGroups = [
  {
    icon: Users,
    title: 'Lokální podnikatelé',
    description: 'Kteří chtějí být vidět online a získávat zákazníky z okolí',
  },
  {
    icon: Briefcase,
    title: 'Služby',
    description: 'Které potřebují jasně prezentovat nabídku a snadný kontakt',
  },
  {
    icon: Target,
    title: 'Trenéři a konzultanti',
    description: 'Kteří staví osobní brand a chtějí důvěryhodnou prezentaci',
  },
  {
    icon: TrendingUp,
    title: 'Malé firmy s růstovým plánem',
    description: 'Které chtějí web, co je nebude brzdit, ale podpoří je',
  },
];

export function ForWho() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Pro koho je řešení vhodné
          </h2>
          <p className="text-xl text-slate-600">
            Spolupráce je ideální pro…
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {targetGroups.map((group, index) => {
            const Icon = group.icon;
            
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-amber-400" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {group.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
