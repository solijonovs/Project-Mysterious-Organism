// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };

  // Task: 3
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    //Task 4:
    mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while(this.dna[randomIndex] === newBase) {
            newBase = returnRandBase;
        }
        this.dna[randomIndex] = newBase;
        return this.data;
    },

    //Task 5:
    compareDNA(otherPAequor) {
        let identicalBases = 0;
        for(let i = 0; i < this.dna.length; i++) {
            if(this.dna === otherPAequor.dna[i]) {
                identicalBases++;

            }
        }
        const percentage = ((identicalBases /this.dna.length) * 100).toFixed(2);
        console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA is common.`)
    },

    //Task 6
    willLikeSurvive() {
        const countCG = this.dna.filter(base => base === 'C' || base === 'G').length;
        return (countCG /this.dna.length) >= 0.6;
    },
  };

  //Creating 30 instances of pAequor that can survive
  const survivingPAequor = [];
  let id = 1;
  while(survivingPAequor.length < 30) {
    const newOrganism = pAequorFactory(id, mockUpStrand());
    if (newOrganism.willLikeSurvive()) {
        survivingPAequor.push(newOrganism);
    }
    id++;
  }

  console.log(survivingPAequor);

};

