
// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

const willLive = (alive, neighbours) => {
  if(alive && (neighbours >= 2 && neighbours <= 3)) {
      return true;
  } else if (neighbours == 3) {
    return true;
  }
  return false;
}

const livingNeighbours = (arrayOfNeighbours) => {
  return arrayOfNeighbours.reduce((total, alive) => {
    if(alive){return ++total};
    return total;
    }, 0);
}

const neighbourCoordinates = () => {

}
describe('livingNeighbours', () => {
  it('says 0', () => {
    expect(neighbourCoordinates([1,1])).toEqual([
        [0,0],
        [0,1],
        [0,2],
        [1,0],
        [1,2],
        [2,0],
        [2,1],
        [2,2]
      ]);
  });
});

describe('livingNeighbours', () => {
  it('says 0', () => {
    expect(livingNeighbours([false,false,false,false,false,false,false,false])).toEqual(0);
  });
  it('says 1', () => {
    expect(livingNeighbours([true,false,false,false,false,false,false,false])).toEqual(1);
  });
  it('says 4', () => {
    expect(livingNeighbours([true,true,true,true,false,false,false,false])).toEqual(4);
  });
  it('says 5', () => {
    expect(livingNeighbours([true,true,true,true,false,false,false,true])).toEqual(5);
  });

});

describe('Game of Life - willLive', () => {

  describe('1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', () => {
    it('dies for 0 neighbours', () => {
      expect(willLive(true, 0)).toEqual(false);
    });

  });

  describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
    it('survives for 3 neighbours', () => {
      expect(willLive(true, 3)).toEqual(true);
    });
    it('survives for 2 neighbours', () => {
      expect(willLive(true, 2)).toEqual(true);
    });
  });

  describe('3. Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    it('dies for 4 neighbours', () => {
      expect(willLive(true, 4)).toEqual(false);
    });
    it('dies for 5 neighbours', () => {
      expect(willLive(true, 5)).toEqual(false);
    });

  });

  describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    it('does not come alive for 2 neighbours', () => {
      expect(willLive(false, 2)).toEqual(false);
    });
    it('comes alive for 3 neighbours', () => {
      expect(willLive(false, 3)).toEqual(true);
    });
  });

});
