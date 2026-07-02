import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import Hero from './Hero'
import ServicesPreview, { ServiceCard, services } from './ServicesPreview'

// One reasonably sized source shared by both stacked copies (single decode, cached)
const BG_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

function PinnedScrollExperience() {
  const wrapperRef = useRef(null)
  const trackViewportRef = useRef(null)
  const trackRef = useRef(null)
  const [maxShift, setMaxShift] = useState(0)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end']
  })

  // Spring-smoothed progress removes the stepped feel of wheel input.
  // Every scroll-driven value derives from this, never from raw scrollYProgress.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.6,
    restDelta: 0.001
  })

  // Shared background: the house never fades to white — a pre-blurred copy of the
  // image (static filter, rasterized once) crossfades in via GPU-composited opacity.
  const blurOpacity = useTransform(smoothProgress, [0, 0.5], [0, 1])
  const bgDim = useTransform(smoothProgress, [0, 0.5], [0, 0.35])

  // Phase 1: hero foreground content (headline, subtext, CTAs, stats) fades out.
  // Transform + opacity only — no animated filters.
  const heroScale = useTransform(smoothProgress, [0, 0.45], [1, 0.94])
  const heroY = useTransform(smoothProgress, [0, 0.45], [0, -40])
  const heroOpacity = useTransform(smoothProgress, [0.05, 0.45], [1, 0])
  const heroPointerEvents = useTransform(smoothProgress, (v) => (v > 0.4 ? 'none' : 'auto'))

  // Phase 2: services fade/slide in over the blurred backdrop, then scroll horizontally
  const servicesOpacity = useTransform(smoothProgress, [0.45, 0.58], [0, 1])
  const servicesY = useTransform(smoothProgress, [0.45, 0.58], [48, 0])
  const trackX = useTransform(smoothProgress, [0.58, 0.96], [0, -maxShift])

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current && trackViewportRef.current) {
        setMaxShift(
          Math.max(0, trackRef.current.scrollWidth - trackViewportRef.current.clientWidth)
        )
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div ref={wrapperRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Sharp background — static, nothing animated */}
        <div className="absolute inset-0 z-0">
          <img
            src={BG_IMAGE}
            alt="Modern architectural building"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
        </div>
        {/* Pre-blurred copy — blur and scale are constant (rasterized once);
            only opacity is scroll-driven, so the crossfade stays on the compositor */}
        <motion.div
          className="absolute inset-0 z-[1] pointer-events-none will-change-[transform,opacity]"
          style={{ opacity: blurOpacity, scale: 1.06, filter: 'blur(14px)' }}
        >
          <img
            src={BG_IMAGE}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
        </motion.div>
        {/* Darkening overlay for card readability — opacity only */}
        <motion.div
          className="absolute inset-0 z-[2] bg-black pointer-events-none"
          style={{ opacity: bgDim }}
        />

        {/* Hero foreground layer (content only, no background) */}
        <motion.div
          className="absolute inset-0 z-20 will-change-[transform,opacity]"
          style={{
            scale: heroScale,
            y: heroY,
            opacity: heroOpacity,
            pointerEvents: heroPointerEvents
          }}
        >
          <Hero background={false} />
        </motion.div>

        {/* Services layer — transparent, sits on the blurred house image */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col"
          style={{ opacity: servicesOpacity, y: servicesY }}
        >
          <div className="container-custom text-center pt-28 lg:pt-32 pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From initial concept to final construction, we provide comprehensive services
              to bring your architectural vision to life.
            </p>
          </div>

          <div ref={trackViewportRef} className="flex-1 flex items-center overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex items-stretch gap-8 pl-16 pr-16 xl:pl-24 xl:pr-24 will-change-transform"
              style={{ x: trackX }}
            >
              {services.map((service, index) => (
                <div key={service.title} className="w-[22rem] shrink-0">
                  <ServiceCard service={service} index={index} inView={true} />
                </div>
              ))}

              {/* Final CTA slide */}
              <div className="w-[26rem] shrink-0 flex items-center justify-center">
                <Link
                  to="/services"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ScrollExperience() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (!isDesktop || prefersReducedMotion) {
    return (
      <>
        <Hero />
        <ServicesPreview />
      </>
    )
  }

  return <PinnedScrollExperience />
}
