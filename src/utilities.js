const getDaysSinceShipped = (shippedDate) => {
  const day = (1000 * 60 * 60 * 24);
  const presentDay = new Date();
  const shipmentDate = new Date(shippedDate);
  const diffInTime = presentDay.getTime() - shipmentDate.getTime();
  const daysSinceShipped = Math.floor(diffInTime / day);

  return daysSinceShipped
}

module.exports = {
  getDaysSinceShipped
}