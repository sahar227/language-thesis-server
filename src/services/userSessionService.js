const { userSession } = require("../models/userSession");

const getAllSessions = async () => {
  const sessions = await userSession.find();
  return sessions;
};

const createNewSession = async (session) => {
  const newSession = new userSession(session);
  await newSession.save();
  return newSession;
};

const isSessionClosed = async (id) => {
  const session = await userSession.findById(id);
  if (!session) return true;
  return session.isOpen;
};

const closeSession = async (id) => {
  const session = await userSession.findByIdAndUpdate(
    id,
    { isOpen: false },
    { new: true }
  );
  return session;
};

module.exports = {
  getAllSessions,
  createNewSession,
  closeSession,
  isSessionClosed,
};
