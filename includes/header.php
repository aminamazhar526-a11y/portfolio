<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amina Mazhar | Full-Stack Web Developer</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              neon: '#00f0ff',       /* Light Cyan / Blue */
              neonGlow: '#0066ff',   /* Deep Electric Blue */
              beige: '#d4c3b3',
              cream: '#fdfbf7',
              dark: '#0a0a0c'
            }
          }
        }
      }
    </script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom Style -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- AOS Library CSS -->
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

  <style>
    /* Custom Neon Scroll Glow Effect */
    [data-aos] {
      transition-property: transform, opacity, box-shadow, filter;
    }
    
    .aos-animate.glass-card, 
    .aos-animate img {
      animation: neonPulse 2.5s infinite alternate ease-in-out;
    }

    @keyframes neonPulse {
      0% {
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.2), inset 0 0 10px rgba(0, 240, 255, 0.1);
      }
      100% {
        box-shadow: 0 0 35px rgba(0, 240, 255, 0.6), 0 0 10px rgba(0, 240, 255, 0.4);
      }
    }
    /* Shiny White Sparkles Effect */
  #bgCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -10;
  }
  </style>
</head>
<body class="bg-dark text-cream font-sans relative overflow-x-hidden selection:bg-neon selection:text-dark">

    <!-- Floating Sparkles Background Canvas -->
    <canvas id="bgCanvas" class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"></canvas>

    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#who-i-am" class="text-2xl font-bold tracking-widest text-cream flex items-center gap-2">
          <span class="text-neon font-mono">&lt;</span>AMINA<span class="text-neon">/&gt;</span>
        </a>
        
        <!-- Desktop Nav -->
        <nav class="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-semibold text-beige">
          <a href="#who-i-am" class="hover:text-neon transition-colors duration-300">Who I Am</a>
          <a href="#what-i-can-do" class="hover:text-neon transition-colors duration-300">What I Can Do</a>
          <a href="#what-i-provide" class="hover:text-neon transition-colors duration-300">What I Provide</a>
          <a href="#what-i-did" class="hover:text-neon transition-colors duration-300">What I Did</a>
          <a href="#how-we-connect" class="hover:text-neon transition-colors duration-300">How We Connect</a>
        </nav>

        <a href="#how-we-connect" class="hidden sm:inline-block px-5 py-2 text-xs font-bold uppercase tracking-wider text-dark bg-neon rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300">
          Hire Me
        </a>
      </div>
    </header>