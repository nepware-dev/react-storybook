const path = require("path")

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ]

  config.resolve.alias = {
    "@ra": path.resolve(__dirname, "..", "src", "vendor", "react-arsenal")
  }

  return config
}
