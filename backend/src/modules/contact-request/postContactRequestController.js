
export const postContactRequestController = async (req, res) => {
  const { email } = req.body;
  res.json({
    message: `Thanks for your feedback! Email was sent to ${email}.`
  })
}
