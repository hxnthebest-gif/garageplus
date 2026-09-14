'use client';

import React from 'react';

interface ConfiguratorStepsProps {
  activeStep: 1 | 2 | 3 | 4;
  completedSteps: number[];
  onStepClick: (step: 1 | 2 | 3 | 4) => void;
}

interface StepDef {
  id: 1 | 2 | 3 | 4;
  num: string;
  title: string;
  subtitle: string;
}

const STEPS: StepDef[] = [
  { id: 1, num: '01', title: 'ARAÇ', subtitle: 'Platform Seçimi' },
  { id: 2, num: '02', title: 'PPF BÖLGELERİ', subtitle: 'Karoser Panelleri' },
  { id: 3, num: '03', title: 'FİLM BİTİŞİ', subtitle: 'Parlak / Saten Mat' },
  { id: 4, num: '04', title: 'ÖZET & TEKLİF', subtitle: 'Teklif Talebi' }
];

export function ConfiguratorSteps({
  activeStep,
  completedSteps,
  onStepClick
}: ConfiguratorStepsProps) {
  return (
    <div className="w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-md py-4 px-4 sm:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {STEPS.map((step, idx) => {
          const isActive = activeStep === step.id;
          const isDone = completedSteps.includes(step.id) && !isActive;
          const isClickable = isDone || step.id <= activeStep;

          return (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => onStepClick(step.id)}
                className={`flex items-center gap-3 transition-all text-left group ${
                  isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-40'
                }`}
              >
                {/* Step Circle Indicator */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-[0_0_16px_rgba(16,185,129,0.4)] scale-105 ring-2 ring-emerald-400'
                      : isDone
                      ? 'bg-emerald-500 text-black font-bold'
                      : 'border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:border-[var(--text-primary)]'
                  }`}
                >
                  {isDone ? 'OK' : step.num}
                </div>

                {/* Step Label */}
                <div className="hidden sm:flex flex-col">
                  <span
                    className={`text-xs font-sans font-bold tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'text-[var(--text-primary)]'
                        : isDone
                        ? 'text-[var(--text-secondary)]'
                        : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-tight">
                    {step.subtitle}
                  </span>
                </div>
              </button>

              {/* Connecting Line between steps */}
              {idx < STEPS.length - 1 && (
                <div className="flex-1 mx-2 sm:mx-4 h-[1px] bg-[var(--border-subtle)] relative overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      completedSteps.includes(step.id) || activeStep > step.id
                        ? 'w-full bg-emerald-500/70'
                        : 'w-0 bg-transparent'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
