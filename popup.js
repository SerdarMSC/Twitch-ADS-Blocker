const rulesetId = "ruleset_1";

// Mevcut durumu kontrol et ve butonu güncelle
chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
  const isEnabled = enabledRulesets.includes(rulesetId);
  document.getElementById('status').textContent = isEnabled ? 'Aktif' : 'Devre Dışı';
  document.getElementById('toggleButton').textContent = isEnabled ? 'Devre Dışı Bırak' : 'Etkinleştir';
});

// Butona tıklanınca kural setini etkinleştir/devre dışı bırak
document.getElementById('toggleButton').addEventListener('click', () => {
  chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
    const isEnabled = enabledRulesets.includes(rulesetId);
    if (isEnabled) {
      chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: [rulesetId] }, () => {
        document.getElementById('status').textContent = 'Devre Dışı';
        document.getElementById('toggleButton').textContent = 'Etkinleştir';
      });
    } else {
      chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: [rulesetId] }, () => {
        document.getElementById('status').textContent = 'Aktif';
        document.getElementById('toggleButton').textContent = 'Devre Dışı Bırak';
      });
    }
  });
});