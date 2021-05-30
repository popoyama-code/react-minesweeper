class Storage {
  insertScore(score) {
    const scores_array = this.getScores()
    const sort_asc = (a, b) => { return a - b }
    scores_array.push(score)
    scores_array.sort(sort_asc)
    while (scores_array.length > 5) {
      scores_array.pop()
    }
    this.setScores(scores_array)
  }
  setScores(scores_array) {
    localStorage.setItem("scores", scores_array)
  }
  getScores() {
    const scores = localStorage.getItem("scores")
    if (scores) return scores.split(',')
    return []
  }
}

export default Storage