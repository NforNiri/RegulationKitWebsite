"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Star } from 'lucide-react';

interface ProductProcessProps {
    title: string;
    steps: { title: string; description: string }[];
}

export function ProductProcess({ title, steps }: ProductProcessProps) {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements to match homepage */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">{title}</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
                    {steps.map((step, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                color: '#fff',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                                padding: '2rem'
                            }}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.03)' }}
                            iconStyle={{ background: '#002455', color: '#fff', boxShadow: '0 0 0 4px rgba(255,255,255,0.1)' }}
                            icon={<div className="flex items-center justify-center w-full h-full font-bold text-xl">{index + 1}</div>}
                        >
                            <h3 className="vertical-timeline-element-title text-2xl font-black mb-4 tracking-tight">{step.title}</h3>
                            <p className="!text-neutral-300 !text-base !font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}
