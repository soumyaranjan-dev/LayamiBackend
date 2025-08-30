const formatDuration = (seconds) => {
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    return `${min}:${sec.toString().padStart("2",0)}`
}

module.exports = formatDuration