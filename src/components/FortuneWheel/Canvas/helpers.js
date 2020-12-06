/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
export const wheelWidth = 600
export const wheelHeight = 600
export const wheelRadius = wheelWidth / 2 - 10
const fillStyles = ['#2B580C', '#AFA939', '#F7B71D', '#F7B71D']

export const handleSelectedValue = (rotateDeg, dataLength) => {
  const rotatedAngel = 270 - (rotateDeg % 360)
  const sectorAngel = 360 / dataLength
  for (let i = 0; i < dataLength; i++) {
    if (rotatedAngel >= 0) {
      if (i * sectorAngel <= rotatedAngel
        && i * sectorAngel + sectorAngel >= rotatedAngel) {
        return i
      }
    } else if (i * sectorAngel <= 360 - (-1 * rotatedAngel)
    && i * sectorAngel + sectorAngel >= 360 - (-1 * rotatedAngel)) {
      return i
    }
  }
  return null
}

const formatText = (ctx, text) => {
  if (ctx.measureText(text).width > wheelRadius * 0.5) {
    let newText = ''
    for (let i = 0; i < text.length; i += 1) {
      if (ctx.measureText(newText).width < wheelRadius * 0.5) {
        newText += text[i]
      }
    }
    return `${newText}...`
  }
  return text
}

function angleToRadian(angle) {
  return (Math.PI / 180) * angle
}

export const drawCircle = (ctx) => {
  ctx.beginPath()
  ctx.arc(wheelWidth / 2, wheelHeight / 2, wheelRadius, 0, 2 * Math.PI)
  ctx.stroke()
}

export const drawSegment = (
  ctx,
  segmentAngel,
  index,
) => {
  ctx.beginPath()
  ctx.fillStyle = fillStyles[index % 3]
  ctx.moveTo(wheelHeight / 2, wheelWidth / 2)
  ctx.arc(
    wheelHeight / 2,
    wheelWidth / 2,
    wheelRadius,
    angleToRadian(index * segmentAngel),
    angleToRadian(index * segmentAngel + segmentAngel),
  )
  ctx.closePath()
  ctx.fill()
}

export const drawText = (ctx, text, index, totalData) => {
  const a = (2 * (Math.PI * (index + 0.5))) / totalData
  ctx.save()
  ctx.translate(300, 300)
  ctx.rotate(a)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#fff'
  ctx.font = `bold ${totalData > 10 ? 300 / totalData : 24}px sans-serif`
  ctx.fillText(formatText(ctx, text), wheelRadius * 0.62, 0)
  ctx.restore()
}

// transfer computed matrix to degree
export const getCurrentRotation = (el) => {
  const st = getComputedStyle(el, null)
  const tm = st.getPropertyValue('-webkit-transform')
           || st.getPropertyValue('-moz-transform')
           || st.getPropertyValue('-ms-transform')
           || st.getPropertyValue('-o-transform')
           || st.getPropertyValue('transform')
           || 'none'
  if (tm !== 'none') {
    const values = tm.split('(')[1].split(')')[0].split(',')
    const angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI))
    return (angle < 0 ? angle + 360 : angle)
  }
  return 0
}
