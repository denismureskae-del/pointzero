const CloudBackground = () => {
  return (
    <div className="cloud-bg">
      <div className="cloud-blob cloud-blob-1 animate-float" />
      <div className="cloud-blob cloud-blob-2 animate-float-slow" />
      <div className="cloud-blob cloud-blob-3 animate-float" />
      <div className="cloud-blob cloud-blob-4 animate-float-fast" />
      <div className="cloud-blob cloud-blob-5 animate-float-slow" />
      
      {/* Additional subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, hsl(200 50% 90% / 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, hsl(195 45% 85% / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 60%, hsl(205 40% 88% / 0.3) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default CloudBackground;
