# Home — Portfolio overrides

Master palette accent `#22C55E` is replaced for this page: the brief asks for Aceternity / 21st.dev neon glow, not “run green”.

| Token | Value | Why |
|-------|--------|-----|
| Background | `#07080c` | Cinematic dark, not pure `#000` (OLED smear) |
| Elevated | `#0d1018` | Glass cards |
| Foreground | `#F1F5F9` | 4.5:1+ on dark |
| Muted | `#94A3B8` | Secondary copy |
| Accent | `#22D3EE` | Cyan glow / CTA |
| Accent 2 | `#818CF8` | Indigo ambient blobs |
| Border | `rgba(255,255,255,0.08)` | Hairline glass |
| Radius | `16px` | Bento / cinema cards |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` | Expo.out |

Section order for this site (brief): Hero → About → Experience → Projects (bento) → Achievements → Skills → Contact.

Motion: Framer Motion clip-slide headlines (overflow mask + translateY), image wipe `clip-path`, dual opposing photo/logo strips tied to scroll, expo.out `cubic-bezier(0.16, 1, 0.3, 1)`. UI 150–300ms, section reveals ~900ms. Spring dialogs (`damping: 20`, `stiffness: 90`). Honor `prefers-reduced-motion`. No scroll-jacking or pinned sections. Lucide icons only — no emoji icons.
