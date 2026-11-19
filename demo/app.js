(() => {
  const button = document.querySelector('#toggle');
  const select = document.querySelector('#scenario');
  const status = document.querySelector('#status');
  const explanations = {
    posture: 'SIMULATED · A posture explanation would use canonical reads; this page performs none.',
    decision: 'SIMULATED · A decision explanation must distinguish policy state, provider outcome, and chain evidence.',
    evidence: 'SIMULATED · Evidence labels must not be upgraded from observation to enforcement or finality.'
  };
  button.addEventListener('click', () => { status.textContent = explanations[select.value]; });
})();
