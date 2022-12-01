import { motion } from 'framer-motion'

const getDirection = str => {
  // left default
  let result = { x: -50 }

  switch (str) {
    case 'right':
      result = { x: 50 }
      break
    case 'up':
      result = { y: -50 }
      break
    case 'down':
      result = { y: 50 }
      break
    case 'none':
      result = {}
      break
    default:
      break
  }
  return { ...result }
}

const Delayed = ({
  from,
  fromOpaque = true,
  delay,
  children,
  onView,
  hoverable
}) => {
  const animate = { x: 0, y: 0, opacity: 1 }
  const transition = { duration: 0.8, delay: delay || 0 }
  const animateProps = onView
    ? { whileInView: { ...animate, transition } }
    : { animate, transition }

  return (
    <motion.div
      initial={{ ...getDirection(from), opacity: fromOpaque ? 0 : 1 }}
      {...animateProps}
      whileHover={{ y: hoverable ? -20 : 0 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
export default Delayed
