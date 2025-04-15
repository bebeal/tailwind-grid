import React from 'react';

export const GridDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center font-mono">
          bg-grid-white/[0.3]
        </code>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-grid-blue-500/[0.6] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500 py-8 flex items-center justify-center font-mono">
          bg-grid-blue-500/[0.6]
        </code>
      </div>
    </div>
  );
};

export const GridMediumDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-grid-md-white/[0.3] bg-grid-md-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center font-mono">
          bg-grid-md-white/[0.3]
        </code>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-grid-md-emerald-500/[0.6] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-emerald-200 to-emerald-500 py-8 flex items-center justify-center font-mono">
          bg-grid-md-emerald-500/[0.6]
        </code>
      </div>
    </div>
  );
};

export const GridSmallDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-grid-sm-white/[0.3] bg-grid-sm-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center font-mono">
          bg-grid-sm-white/[0.3]
        </code>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-grid-sm-violet-500/[0.6] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-violet-200 to-violet-500 py-8 flex items-center justify-center font-mono">
          bg-grid-sm-violet-500/[0.6]
        </code>
      </div>
    </div>
  );
};

export const DotDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center font-mono">
          bg-dot-white/[0.3]
        </code>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-dot-rose-500/[0.6] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-rose-200 to-rose-500 py-8 flex items-center justify-center font-mono">
          bg-dot-rose-500/[0.6]
        </code>
      </div>
    </div>
  );
};

export const DotMediumDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-dot-md-white/[0.3] bg-dot-md-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center font-mono">
          bg-dot-md-white/[0.3]
        </code>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-dot-md-pink-500/[0.6] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-pink-200 to-pink-500 py-8 flex items-center justify-center font-mono">
          bg-dot-md-pink-500/[0.6]
        </code>
      </div>
    </div>
  );
};

export const DotSmallDemo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center w-full">
      {/* Default white version */}
      <div className="h-[450px] w-1/2 border border-gray-500 dark:bg-black bg-white dark:bg-dot-sm-white/[0.3] bg-dot-sm-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center font-mono">
          bg-dot-sm-white/[0.3]
        </code>
      </div>

      {/* Colored version */}
      <div className="h-[450px] w-1/2 border border-gray-500 bg-black bg-dot-sm-teal-500/[0.6] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <code className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-teal-200 to-teal-500 py-8 flex items-center justify-center font-mono">
          bg-dot-sm-teal-500/[0.6]
        </code>
      </div>
    </div>
  );
};
