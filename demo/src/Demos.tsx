import React from 'react';

export const GridDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-grid-white/[0.2]</code>
        </p>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-grid-blue-500/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-grid-blue-500/[0.5]</code>
        </p>
      </div>
    </div>
  );
};

export const GridMediumDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-grid-md-white/[0.2] bg-grid-md-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-grid-md-white/[0.2]</code>
        </p>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-grid-md-emerald-500/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-emerald-200 to-emerald-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-grid-md-emerald-500/[0.5]</code>
        </p>
      </div>
    </div>
  );
};

export const GridSmallDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-grid-sm-white/[0.2] bg-grid-sm-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-grid-sm-white/[0.2]</code>
        </p>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-grid-sm-purple-500/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-grid-sm-purple-500/[0.5]</code>
        </p>
      </div>
    </div>
  );
};

export const DotDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-dot-white/[0.2]</code>
        </p>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-dot-rose-500/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-rose-200 to-rose-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-dot-rose-500/[0.5]</code>
        </p>
      </div>
    </div>
  );
};

export const DotMediumDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-dot-md-white/[0.2] bg-dot-md-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-dot-md-white/[0.2]</code>
        </p>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-dot-md-amber-500/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-amber-200 to-amber-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-dot-md-amber-500/[0.5]</code>
        </p>
      </div>
    </div>
  );
};

export const DotSmallDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-dot-sm-white/[0.2] bg-dot-sm-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-dot-sm-white/[0.2]</code>
        </p>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-dot-sm-teal-500/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <p className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-teal-200 to-teal-500 py-8 flex items-center justify-center">
          <code className="text-sm font-mono">bg-dot-sm-teal-500/[0.5]</code>
        </p>
      </div>
    </div>
  );
};
