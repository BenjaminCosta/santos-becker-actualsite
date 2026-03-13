export function ContactMap() {
  return (
    <section className="h-[380px] w-full relative overflow-hidden border-t border-border">
      <div
        className="w-full h-full bg-cover bg-center grayscale opacity-75"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1920&q=80")' }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white px-8 py-4 flex items-center gap-3">
          <div className="w-3 h-3 bg-primary shrink-0"></div>
          <span className="font-heading uppercase tracking-[0.15em] text-sm font-bold">Santos & Becker — CDMX</span>
        </div>
      </div>
    </section>
  );
}
