module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e136757ea8215f2e642641ce0b58023'),
  },
});
