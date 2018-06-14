function LogService() {

  let logs = [];

  const addLog = (user, action) => {
    logs.push(new LogUser(user, action));
  };

  const getLogs = () => {
    return logs;
  };

  const LogService = {
    addLog         : addLog,
    getLogs        : getLogs
  };

  return LogService;
}
angular.module('app').factory('LogService', LogService);
