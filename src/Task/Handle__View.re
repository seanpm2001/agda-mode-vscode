// from View Response to Tasks
module Impl = (Editor: Sig.Editor) => {
  module Task = Task.Impl(Editor);
  open! Task;
  open View.Response;

  let handle =
    fun
    | Success => []
    | InquiryResult(_) => []
    | Event(Initialized) => []
    | Event(Destroyed) => [Terminate];
};