// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

const giveMeCoords = () => {
}


describe('Game of Life - giveMeCoords', () => {
  it('', () => {
    expect(giveMeCoords([0,0])).toEqual([
      [-1,1],[0,1],[1,1],
      [-1,0],      [1,0],
      [-1,-1],[0,-1],[1,-1],
    ]);
  });
});

const willItLive = (bool, aliveNeighbours) => {
  if (
    aliveNeighbours <= 1 ||
    aliveNeighbours > 3 ||
    (bool == false && aliveNeighbours == 2)
  ) {
      return false;
  }
  return true;
}

describe('Game of Life - willItLive', () => {
  describe('1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', () => {
    it('Will die with 1 neighbour', () => {
      expect(willItLive(true, 1)).toEqual(false);
    });
    it('Will die with 0 neighbours', () => {
      expect(willItLive(true, 0)).toEqual(false);
    });
  });
  describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
    it('Will live with 2 neighbours', () => {
      expect(willItLive(true, 2)).toEqual(true);
    });
  });
  describe('3. Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    it('Will die with 4 neighbours', () => {
      expect(willItLive(true, 4)).toEqual(false);
    });
    it('Will die with 5 neighbours', () => {
      expect(willItLive(true, 5)).toEqual(false);
    });
  });
  describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    it('Will it reborn with 3 neighbours', () => {
      expect(willItLive(false, 3)).toEqual(true);
    });
    it('Will it be dead with 2 neigbours', () => {
      expect(willItLive(false, 2)).toEqual(false);
    });
  });
});

const giveMeNeighbours = (neigbours) => {
  return neigbours.filter((neighbour) => neighbour).length
};

describe('Game of Life - giveMeNeighbours', () => {
  it('0 neigbours', () => {
    expect(giveMeNeighbours([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ])).toEqual(0);
  });
  it('1 neigbours', () => {
    expect(giveMeNeighbours([
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ])).toEqual(1);
  });
  it('8 neigbours', () => {
    expect(giveMeNeighbours([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ])).toEqual(8);
  });
});
