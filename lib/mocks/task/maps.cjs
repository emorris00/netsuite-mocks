const taskStub = require("suitecloud-unit-testing-stubs/stubs/task");
const CsvImportTask = require("./CsvImportTask.cjs");
const EntityDeduplicationTask = require("./EntityDeduplicationTask.cjs");
const MapReduceScriptTask = require("./MapReduceScriptTask.cjs");
const QueryTask = require("./QueryTask.cjs");
const RecordActionTask = require("./RecordActionTask.cjs");
const ScheduledScriptTask = require("./ScheduledScriptTask.cjs");
const SearchTask = require("./SearchTask.cjs");
const SuiteQLTask = require("./SuiteQLTask.cjs");
const WorkflowTriggerTask = require("./WorkflowTriggerTask.cjs");
const TaskTypeMap = {
  [taskStub.TaskType.CSV_IMPORT]: CsvImportTask,
  [taskStub.TaskType.ENTITY_DEDUPLICATION]: EntityDeduplicationTask,
  [taskStub.TaskType.MAP_REDUCE]: MapReduceScriptTask,
  [taskStub.TaskType.QUERY]: QueryTask,
  [taskStub.TaskType.RECORD_ACTION]: RecordActionTask,
  [taskStub.TaskType.SCHEDULED_SCRIPT]: ScheduledScriptTask,
  [taskStub.TaskType.SEARCH]: SearchTask,
  [taskStub.TaskType.SUITE_QL]: SuiteQLTask,
  [taskStub.TaskType.WORKFLOW_TRIGGER]: WorkflowTriggerTask
};
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
module.exports = {
  TaskTypeMap,
  TaskTypeStatusMap
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0YXNrU3R1YiIsInJlcXVpcmUiLCJDc3ZJbXBvcnRUYXNrIiwiRW50aXR5RGVkdXBsaWNhdGlvblRhc2siLCJNYXBSZWR1Y2VTY3JpcHRUYXNrIiwiUXVlcnlUYXNrIiwiUmVjb3JkQWN0aW9uVGFzayIsIlNjaGVkdWxlZFNjcmlwdFRhc2siLCJTZWFyY2hUYXNrIiwiU3VpdGVRTFRhc2siLCJXb3JrZmxvd1RyaWdnZXJUYXNrIiwiVGFza1R5cGVNYXAiLCJUYXNrVHlwZSIsIkNTVl9JTVBPUlQiLCJFTlRJVFlfREVEVVBMSUNBVElPTiIsIk1BUF9SRURVQ0UiLCJRVUVSWSIsIlJFQ09SRF9BQ1RJT04iLCJTQ0hFRFVMRURfU0NSSVBUIiwiU0VBUkNIIiwiU1VJVEVfUUwiLCJXT1JLRkxPV19UUklHR0VSIiwiQ3N2SW1wb3J0VGFza1N0YXR1cyIsIkVudGl0eURlZHVwbGljYXRpb25UYXNrU3RhdHVzIiwiTWFwUmVkdWNlU2NyaXB0VGFza1N0YXR1cyIsIlF1ZXJ5VGFza1N0YXR1cyIsIlJlY29yZEFjdGlvblRhc2tTdGF0dXMiLCJTY2hlZHVsZWRTY3JpcHRUYXNrU3RhdHVzIiwiU2VhcmNoVGFza1N0YXR1cyIsIlN1aXRlUUxUYXNrU3RhdHVzIiwiV29ya2Zsb3dUcmlnZ2VyVGFza1N0YXR1cyIsIlRhc2tUeXBlU3RhdHVzTWFwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2Nrcy90YXNrL21hcHMuY2pzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2tTdHViID0gcmVxdWlyZShcInN1aXRlY2xvdWQtdW5pdC10ZXN0aW5nLXN0dWJzL3N0dWJzL3Rhc2tcIik7XG5cbmNvbnN0IENzdkltcG9ydFRhc2sgPSByZXF1aXJlKFwiLi9Dc3ZJbXBvcnRUYXNrLmNqc1wiKTtcbmNvbnN0IEVudGl0eURlZHVwbGljYXRpb25UYXNrID0gcmVxdWlyZShcIi4vRW50aXR5RGVkdXBsaWNhdGlvblRhc2suY2pzXCIpO1xuY29uc3QgTWFwUmVkdWNlU2NyaXB0VGFzayA9IHJlcXVpcmUoXCIuL01hcFJlZHVjZVNjcmlwdFRhc2suY2pzXCIpO1xuY29uc3QgUXVlcnlUYXNrID0gcmVxdWlyZShcIi4vUXVlcnlUYXNrLmNqc1wiKTtcbmNvbnN0IFJlY29yZEFjdGlvblRhc2sgPSByZXF1aXJlKFwiLi9SZWNvcmRBY3Rpb25UYXNrLmNqc1wiKTtcbmNvbnN0IFNjaGVkdWxlZFNjcmlwdFRhc2sgPSByZXF1aXJlKFwiLi9TY2hlZHVsZWRTY3JpcHRUYXNrLmNqc1wiKTtcbmNvbnN0IFNlYXJjaFRhc2sgPSByZXF1aXJlKFwiLi9TZWFyY2hUYXNrLmNqc1wiKTtcbmNvbnN0IFN1aXRlUUxUYXNrID0gcmVxdWlyZShcIi4vU3VpdGVRTFRhc2suY2pzXCIpO1xuY29uc3QgV29ya2Zsb3dUcmlnZ2VyVGFzayA9IHJlcXVpcmUoXCIuL1dvcmtmbG93VHJpZ2dlclRhc2suY2pzXCIpO1xuXG5jb25zdCBUYXNrVHlwZU1hcCA9IHtcblx0W3Rhc2tTdHViLlRhc2tUeXBlLkNTVl9JTVBPUlRdOiBDc3ZJbXBvcnRUYXNrLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuRU5USVRZX0RFRFVQTElDQVRJT05dOiBFbnRpdHlEZWR1cGxpY2F0aW9uVGFzayxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLk1BUF9SRURVQ0VdOiBNYXBSZWR1Y2VTY3JpcHRUYXNrLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuUVVFUlldOiBRdWVyeVRhc2ssXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5SRUNPUkRfQUNUSU9OXTogUmVjb3JkQWN0aW9uVGFzayxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLlNDSEVEVUxFRF9TQ1JJUFRdOiBTY2hlZHVsZWRTY3JpcHRUYXNrLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuU0VBUkNIXTogU2VhcmNoVGFzayxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLlNVSVRFX1FMXTogU3VpdGVRTFRhc2ssXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5XT1JLRkxPV19UUklHR0VSXTogV29ya2Zsb3dUcmlnZ2VyVGFzayxcbn07XG5cbmNvbnN0IENzdkltcG9ydFRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9Dc3ZJbXBvcnRUYXNrU3RhdHVzLmNqc1wiKTtcbmNvbnN0IEVudGl0eURlZHVwbGljYXRpb25UYXNrU3RhdHVzID0gcmVxdWlyZShcIi4vRW50aXR5RGVkdXBsaWNhdGlvblRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgTWFwUmVkdWNlU2NyaXB0VGFza1N0YXR1cyA9IHJlcXVpcmUoXCIuL01hcFJlZHVjZVNjcmlwdFRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgUXVlcnlUYXNrU3RhdHVzID0gcmVxdWlyZShcIi4vUXVlcnlUYXNrU3RhdHVzLmNqc1wiKTtcbmNvbnN0IFJlY29yZEFjdGlvblRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9SZWNvcmRBY3Rpb25UYXNrU3RhdHVzLmNqc1wiKTtcbmNvbnN0IFNjaGVkdWxlZFNjcmlwdFRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9TY2hlZHVsZWRTY3JpcHRUYXNrU3RhdHVzLmNqc1wiKTtcbmNvbnN0IFNlYXJjaFRhc2tTdGF0dXMgPSByZXF1aXJlKFwiLi9TZWFyY2hUYXNrU3RhdHVzLmNqc1wiKTtcbmNvbnN0IFN1aXRlUUxUYXNrU3RhdHVzID0gcmVxdWlyZShcIi4vU3VpdGVRTFRhc2tTdGF0dXMuY2pzXCIpO1xuY29uc3QgV29ya2Zsb3dUcmlnZ2VyVGFza1N0YXR1cyA9IHJlcXVpcmUoXCIuL1dvcmtmbG93VHJpZ2dlclRhc2tTdGF0dXMuY2pzXCIpO1xuXG5jb25zdCBUYXNrVHlwZVN0YXR1c01hcCA9IHtcblx0W3Rhc2tTdHViLlRhc2tUeXBlLkNTVl9JTVBPUlRdOiBDc3ZJbXBvcnRUYXNrU3RhdHVzLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuRU5USVRZX0RFRFVQTElDQVRJT05dOiBFbnRpdHlEZWR1cGxpY2F0aW9uVGFza1N0YXR1cyxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLk1BUF9SRURVQ0VdOiBNYXBSZWR1Y2VTY3JpcHRUYXNrU3RhdHVzLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuUVVFUlldOiBRdWVyeVRhc2tTdGF0dXMsXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5SRUNPUkRfQUNUSU9OXTogUmVjb3JkQWN0aW9uVGFza1N0YXR1cyxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLlNDSEVEVUxFRF9TQ1JJUFRdOiBTY2hlZHVsZWRTY3JpcHRUYXNrU3RhdHVzLFxuXHRbdGFza1N0dWIuVGFza1R5cGUuU0VBUkNIXTogU2VhcmNoVGFza1N0YXR1cyxcblx0W3Rhc2tTdHViLlRhc2tUeXBlLlNVSVRFX1FMXTogU3VpdGVRTFRhc2tTdGF0dXMsXG5cdFt0YXNrU3R1Yi5UYXNrVHlwZS5XT1JLRkxPV19UUklHR0VSXTogV29ya2Zsb3dUcmlnZ2VyVGFza1N0YXR1cyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRUYXNrVHlwZU1hcCxcblx0VGFza1R5cGVTdGF0dXNNYXAsXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQztBQUVwRSxNQUFNQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztBQUNwRCxNQUFNRSx1QkFBdUIsR0FBR0YsT0FBTyxDQUFDLCtCQUErQixDQUFDO0FBQ3hFLE1BQU1HLG1CQUFtQixHQUFHSCxPQUFPLENBQUMsMkJBQTJCLENBQUM7QUFDaEUsTUFBTUksU0FBUyxHQUFHSixPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDNUMsTUFBTUssZ0JBQWdCLEdBQUdMLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztBQUMxRCxNQUFNTSxtQkFBbUIsR0FBR04sT0FBTyxDQUFDLDJCQUEyQixDQUFDO0FBQ2hFLE1BQU1PLFVBQVUsR0FBR1AsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0FBQzlDLE1BQU1RLFdBQVcsR0FBR1IsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0FBQ2hELE1BQU1TLG1CQUFtQixHQUFHVCxPQUFP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