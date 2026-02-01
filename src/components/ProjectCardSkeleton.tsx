import React from 'react';

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <article 
      className="relative flex flex-col rounded-xl overflow-hidden
                 bg-text-primary/5 border border-text-primary/10"
      aria-hidden="true"
    >
      {/* Skeleton Imagen */}
      <div className="relative h-48 overflow-hidden w-full bg-text-primary/5">
        <div className="w-full h-full animate-pulse bg-gradient-to-r from-text-primary/5 via-text-primary/10 to-text-primary/5 bg-[length:200%_100%] skeleton-shimmer" />
      </div>

      {/* Skeleton Contenido */}
      <div className="flex flex-col flex-grow p-5 gap-3">
        <div className="flex justify-between items-start gap-4">
          {/* Skeleton Título */}
          <div className="h-6 bg-text-primary/10 rounded-md w-2/3 animate-pulse" />
          
          {/* Skeleton Links */}
          <div className="flex gap-2 shrink-0">
            <div className="w-7 h-7 bg-text-primary/10 rounded-lg animate-pulse" />
            <div className="w-7 h-7 bg-text-primary/10 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Skeleton Descripción */}
        <div className="space-y-2">
          <div className="h-4 bg-text-primary/10 rounded w-full animate-pulse" />
          <div className="h-4 bg-text-primary/10 rounded w-4/5 animate-pulse" />
        </div>

        {/* Skeleton Tech Tags */}
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-primary/10 border border-primary/20 rounded-md animate-pulse" />
          <div className="h-6 w-20 bg-primary/10 border border-primary/20 rounded-md animate-pulse" />
          <div className="h-6 w-14 bg-primary/10 border border-primary/20 rounded-md animate-pulse" />
        </div>
      </div>
    </article>
  );
};

export const ProjectsSkeletonGrid: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 animate-in fade-in duration-700">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
};
