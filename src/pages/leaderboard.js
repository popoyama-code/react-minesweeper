import React from 'react'

import LeaderboardTemplate from '../components/templates/leaderboardTemplate'

import Storage from '../helper/storage'

function Leaderboard() {
  const StorageInstance = new Storage()
  const timeArray = StorageInstance.getScores()
  return (
    <LeaderboardTemplate timeArray={timeArray} />
  )
}

export default Leaderboard