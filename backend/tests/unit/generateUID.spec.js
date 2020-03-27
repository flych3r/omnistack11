const generateUID = require('../../src/utils/generateUID')

describe('Generate UID', () => {
  it('should generate unique id', () => {

    const id = generateUID()

    expect(id).toHaveLength(8)
  })
})
