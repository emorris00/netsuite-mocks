const SuiteScriptMocks = require("../../index.cjs");
const taskStub = require("suitecloud-unit-testing-stubs/stubs/task");
const CsvImportTaskStatus = require("./CsvImportTaskStatus.cjs");
const EntityDeduplicationTaskStatus = require("./EntityDeduplicationTaskStatus.cjs");
const MapReduceScriptTaskStatus = require("./MapReduceScriptTaskStatus.cjs");
const QueryTaskStatus = require("./QueryTaskStatus.cjs");
const RecordActionTaskStatus = require("./RecordActionTaskStatus.cjs");
const ScheduledScriptTaskStatus = require("./ScheduledScriptTaskStatus.cjs");
const SearchTaskStatus = require("./SearchTaskStatus.cjs");
const SuiteQLTaskStatus = require("./SuiteQLTaskStatus.cjs");
const WorkflowTriggerTaskStatus = require("./WorkflowTriggerTaskStatus.cjs");
const TaskTypeStatusMap = {
  [taskStub.TaskType.CSV_IMPORT]: CsvImportTaskStatus,
  [taskStub.TaskType.ENTITY_DEDUPLICATION]: EntityDeduplicationTaskStatus,
  [taskStub.TaskType.MAP_REDUCE]: MapReduceScriptTaskStatus,
  [taskStub.TaskType.QUERY]: QueryTaskStatus,
  [taskStub.TaskType.RECORD_ACTION]: RecordActionTaskStatus,
  [taskStub.TaskType.SCHEDULED_SCRIPT]: ScheduledScriptTaskStatus,
  [taskStub.TaskType.SEARCH]: SearchTaskStatus,
  [taskStub.TaskType.SUITE_QL]: SuiteQLTaskStatus,
  [taskStub.TaskType.WORKFLOW_TRIGGER]: WorkflowTriggerTaskStatus
};
class Task {
  id;
  taskType;
  submit = () => {
    if (this.id) {
      throw new Error("Cannot submit task.");
    }
    if (!(this.taskType in TaskTypeStatusMap)) {
      throw new Error(`'${this.taskType}' is not a valid taskType`);
    }
    this.id = Math.max(Array.from(SuiteScriptMocks.taskStatuses.values()).map(a => a.taskId)) + 1;
    SuiteScriptMocks.submittedTasks.push(this);
    SuiteScriptMocks.taskStatuses.add(new TaskTypeStatusMap[this.taskType]({
      taskId: this.id,
      status: taskStub.TaskStatus.PENDING
    }));
    return this.id;
  };
}
module.exports = {
  Task,
  TaskTypeStatusMap
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdWl0ZVNjcmlwdE1vY2tzIiwicmVxdWlyZSIsInRhc2tTdHViIiwiQ3N2SW1wb3J0VGFza1N0YXR1cyIsIkVudGl0eURlZHVwbGljYXRpb25UYXNrU3RhdHVzIiwiTWFwUmVkdWNlU2NyaXB0VGFza1N0YXR1cyIsIlF1ZXJ5VGFza1N0YXR1cyIsIlJlY29yZEFjdGlvblRhc2tTdGF0dXMiLCJTY2hlZHVsZWRTY3JpcHRUYXNrU3RhdHVzIiwiU2VhcmNoVGFza1N0YXR1cyIsIlN1aXRlUUxUYXNrU3RhdHVzIiwiV29ya2Zsb3dUcmlnZ2VyVGFza1N0YXR1cyIsIlRhc2tUeXBlU3RhdHVzTWFwIiwiVGFza1R5cGUiLCJDU1ZfSU1QT1JUIiwiRU5USVRZX0RFRFVQTElDQVRJT04iLCJNQVBfUkVEVUNFIiwiUVVFUlkiLCJSRUNPUkRfQUNUSU9OIiwiU0NIRURVTEVEX1NDUklQVCIsIlNFQVJDSCIsIlNVSVRFX1FMIiwiV09SS0ZMT1dfVFJJR0dFUiIsIlRhc2siLCJpZCIsInRhc2tUeXBlIiwic3VibWl0IiwiRXJyb3IiLCJNYXRoIiwibWF4IiwiQXJyYXkiLCJmcm9tIiwidGFza1N0YXR1c2VzIiwidmFsdWVzIiwibWFwIiwiYSIsInRhc2tJZCIsInN1Ym1pdHRlZFRhc2tzIiwicHVzaCIsImFkZCIsInN0YXR1cyIsIlRhc2tTdGF0dXMiLCJQRU5ESU5HIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2Nrcy90YXNrL1Rhc2suY2pzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN1aXRlU2NyaXB0TW9ja3MgPSByZXF1aXJlKFwiLi4vLi4vaW5kZXguY2pzXCIpO1xuY29uc3QgdGFza1N0dWIgPSByZXF1aXJlKFwic3VpdGVjbG91ZC11bml0LXRlc3Rpbmctc3R1YnMvc3R1YnMvdGFza1wiKTtcblxuY29uc3QgQ3N2SW1wb3J0VGFza1N0YXR1cyA9IHJlcXVpcmUoXCIuL0NzdkltcG9ydFRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgRW50aXR5RGVkdXBsaWNhdGlvblRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9FbnRpdHlEZWR1cGxpY2F0aW9uVGFza1N0YXR1cy5janNcIik7XG5jb25zdCBNYXBSZWR1Y2VTY3JpcHRUYXNrU3RhdHVzID0gcmVxdWlyZShcIi4vTWFwUmVkdWNlU2NyaXB0VGFza1N0YXR1cy5janNcIik7XG5jb25zdCBRdWVyeVRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9RdWVyeVRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgUmVjb3JkQWN0aW9uVGFza1N0YXR1cyA9IHJlcXVpcmUoXCIuL1JlY29yZEFjdGlvblRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgU2NoZWR1bGVkU2NyaXB0VGFza1N0YXR1cyA9IHJlcXVpcmUoXCIuL1NjaGVkdWxlZFNjcmlwdFRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgU2VhcmNoVGFza1N0YXR1cyA9IHJlcXVpcmUoXCIuL1NlYXJjaFRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgU3VpdGVRTFRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9TdWl0ZVFMVGFza1N0YXR1cy5janNcIik7XG5jb25zdCBXb3JrZmxvd1RyaWdnZXJUYXNrU3RhdHVzID0gcmVxdWlyZShcIi4vV29ya2Zsb3dUcmlnZ2VyVGFza1N0YXR1cy5janNcIik7XG5cbmNvbnN0IFRhc2tUeXBlU3RhdHVzTWFwID0ge1xuXHRbdGFza1N0dWIuVGFza1R5cGUuQ1NWX0lNUE9SVF06IENzdkltcG9ydFRhc2tTdGF0dXMsXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5FTlRJVFlfREVEVVBMSUNBVElPTl06IEVudGl0eURlZHVwbGljYXRpb25UYXNrU3RhdHVzLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuTUFQX1JFRFVDRV06IE1hcFJlZHVjZVNjcmlwdFRhc2tTdGF0dXMsXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5RVUVSWV06IFF1ZXJ5VGFza1N0YXR1cyxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLlJFQ09SRF9BQ1RJT05dOiBSZWNvcmRBY3Rpb25UYXNrU3RhdHVzLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuU0NIRURVTEVEX1NDUklQVF06IFNjaGVkdWxlZFNjcmlwdFRhc2tTdGF0dXMsXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5TRUFSQ0hdOiBTZWFyY2hUYXNrU3RhdHVzLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuU1VJVEVfUUxdOiBTdWl0ZVFMVGFza1N0YXR1cyxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLldPUktGTE9XX1RSSUdHRVJdOiBXb3JrZmxvd1RyaWdnZXJUYXNrU3RhdHVzLFxufTtcblxuY2xhc3MgVGFzayB7XG5cdGlkO1xuXHR0YXNrVHlwZTtcblxuXHRzdWJtaXQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMuaWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdWJtaXQgdGFzay5cIik7XG5cdFx0fVxuXHRcdGlmICghKHRoaXMudGFza1R5cGUgaW4gVGFza1R5cGVTdGF0dXNNYXApKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCcke3RoaXMudGFza1R5cGV9JyBpcyBub3QgYSB2YWxpZCB0YXNrVHlwZWApO1xuXHRcdH1cblx0XHR0aGlzLmlkID0gTWF0aC5tYXgoQXJyYXkuZnJvbShTdWl0ZVNjcmlwdE1vY2tzLnRhc2tTdGF0dXNlcy52YWx1ZXMoKSkubWFwKChhKSA9PiBhLnRhc2tJZCkpICsgMTtcblx0XHRTdWl0ZVNjcmlwdE1vY2tzLnN1Ym1pdHRlZFRhc2tzLnB1c2godGhpcyk7XG5cdFx0U3VpdGVTY3JpcHRNb2Nrcy50YXNrU3RhdHVzZXMuYWRkKFxuXHRcdFx0bmV3IFRhc2tUeXBlU3RhdHVzTWFwW3RoaXMudGFza1R5cGVdKHtcblx0XHRcdFx0dGFza0lkOiB0aGlzLmlkLFxuXHRcdFx0XHRzdGF0dXM6IHRhc2tTdHViLlRhc2tTdGF0dXMuUEVORElORyxcblx0XHRcdH0pLFxuXHRcdCk7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH07XG59XG5cbm1vZHVs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