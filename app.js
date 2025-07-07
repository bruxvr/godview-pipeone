// Data from application_data_json with enhanced structure for date filtering
const applicationData = {
  "accounts": [
    {
      "id": "acc_001",
      "name": "TechCorp Enterprise",
      "type": "enterprise",
      "status": "active",
      "parent": null,
      "children": ["acc_002", "acc_003", "acc_004"],
      "users": 245,
      "contacts": 15420,
      "lastActivity": "2 horas atrás",
      "region": "América do Norte",
      "mtmoVolume": 3450,
      "channels": {
        "whatsapp": 1552,
        "sms": 1035,
        "email": 690,
        "push": 173
      }
    },
    {
      "id": "acc_002",
      "name": "TechCorp - Desenvolvimento",
      "type": "department",
      "status": "active",
      "parent": "acc_001",
      "children": ["acc_005"],
      "users": 45,
      "contacts": 2890,
      "lastActivity": "1 hora atrás",
      "region": "América do Norte",
      "mtmoVolume": 670,
      "channels": {
        "whatsapp": 300,
        "sms": 200,
        "email": 150,
        "push": 20
      }
    },
    {
      "id": "acc_003",
      "name": "TechCorp - Marketing",
      "type": "department",
      "status": "active",
      "parent": "acc_001",
      "children": [],
      "users": 32,
      "contacts": 8950,
      "lastActivity": "3 horas atrás",
      "region": "América do Norte",
      "mtmoVolume": 1890,
      "channels": {
        "whatsapp": 850,
        "sms": 567,
        "email": 378,
        "push": 95
      }
    },
    {
      "id": "acc_004",
      "name": "TechCorp - Vendas",
      "type": "department",
      "status": "limited",
      "parent": "acc_001",
      "children": [],
      "users": 28,
      "contacts": 12450,
      "lastActivity": "5 horas atrás",
      "region": "América do Norte",
      "mtmoVolume": 890,
      "channels": {
        "whatsapp": 402,
        "sms": 268,
        "email": 162,
        "push": 58
      }
    },
    {
      "id": "acc_005",
      "name": "TechCorp - Equipe QA",
      "type": "team",
      "status": "active",
      "parent": "acc_002",
      "children": [],
      "users": 12,
      "contacts": 450,
      "lastActivity": "30 minutos atrás",
      "region": "América do Norte",
      "mtmoVolume": 120,
      "channels": {
        "whatsapp": 54,
        "sms": 36,
        "email": 24,
        "push": 6
      }
    },
    {
      "id": "acc_006",
      "name": "Global Manufacturing Ltd",
      "type": "enterprise",
      "status": "active",
      "parent": null,
      "children": ["acc_007", "acc_008"],
      "users": 178,
      "contacts": 9870,
      "lastActivity": "1 dia atrás",
      "region": "Europa",
      "mtmoVolume": 2340,
      "channels": {
        "whatsapp": 1053,
        "sms": 702,
        "email": 468,
        "push": 117
      }
    },
    {
      "id": "acc_007",
      "name": "GM - Produção",
      "type": "department",
      "status": "active",
      "parent": "acc_006",
      "children": [],
      "users": 89,
      "contacts": 3450,
      "lastActivity": "2 horas atrás",
      "region": "Europa",
      "mtmoVolume": 890,
      "channels": {
        "whatsapp": 401,
        "sms": 267,
        "email": 178,
        "push": 44
      }
    },
    {
      "id": "acc_008",
      "name": "GM - Logística",
      "type": "department",
      "status": "suspended",
      "parent": "acc_006",
      "children": [],
      "users": 34,
      "contacts": 1200,
      "lastActivity": "3 dias atrás",
      "region": "Europa",
      "mtmoVolume": 45,
      "channels": {
        "whatsapp": 20,
        "sms": 15,
        "email": 8,
        "push": 2
      }
    },
    {
      "id": "acc_009",
      "name": "StartupXYZ",
      "type": "startup",
      "status": "trial",
      "parent": null,
      "children": [],
      "users": 8,
      "contacts": 2340,
      "lastActivity": "6 horas atrás",
      "region": "Ásia Pacífico",
      "mtmoVolume": 560,
      "channels": {
        "whatsapp": 252,
        "sms": 168,
        "email": 112,
        "push": 28
      }
    },
    {
      "id": "acc_010",
      "name": "Individual - João Silva",
      "type": "individual",
      "status": "active",
      "parent": null,
      "children": [],
      "users": 1,
      "contacts": 150,
      "lastActivity": "1 hora atrás",
      "region": "América do Norte",
      "mtmoVolume": 35,
      "channels": {
        "whatsapp": 16,
        "sms": 11,
        "email": 6,
        "push": 2
      }
    }
  ],
  "errorMetrics": {
    "totalMonth": 120,
    "variation": -5,
    "byDay": [
      {"date": "2025-07-01", "errors": 8},
      {"date": "2025-07-02", "errors": 12},
      {"date": "2025-07-03", "errors": 6},
      {"date": "2025-07-04", "errors": 15},
      {"date": "2025-07-05", "errors": 9},
      {"date": "2025-07-06", "errors": 18},
      {"date": "2025-07-07", "errors": 7}
    ],
    "byType": [
      {"type": "autenticação", "count": 45, "percentage": 37.5},
      {"type": "timeout", "count": 38, "percentage": 31.7},
      {"type": "payload inválido", "count": 22, "percentage": 18.3},
      {"type": "rate limit", "count": 15, "percentage": 12.5}
    ]
  },
  "channelMetrics": {
    "totalMTMO": 12300,
    "variation": 10,
    "byChannel": [
      {"channel": "WhatsApp", "active": 8, "mtmo": 5535, "percentage": 45},
      {"channel": "SMS", "active": 6, "mtmo": 3690, "percentage": 30},
      {"channel": "Email", "active": 5, "mtmo": 2460, "percentage": 20},
      {"channel": "Push", "active": 3, "mtmo": 615, "percentage": 5}
    ]
  },
  "apiErrors": {
    "total": 15,
    "variation": 3,
    "byEndpoint": [
      {"endpoint": "/api/v1/messages/send", "errors": 6, "status": "critical", "type": "payload", "lastError": "2025-07-07 14:30"},
      {"endpoint": "/api/v1/auth/token", "errors": 4, "status": "warning", "type": "autenticação", "lastError": "2025-07-07 13:45"},
      {"endpoint": "/api/v1/webhooks/receive", "errors": 3, "status": "warning", "type": "timeout", "lastError": "2025-07-07 12:15"},
      {"endpoint": "/api/v1/accounts/validate", "errors": 2, "status": "normal", "type": "validação", "lastError": "2025-07-07 11:30"},
      {"endpoint": "/api/v1/contacts/import", "errors": 3, "status": "warning", "type": "payload", "lastError": "2025-07-07 10:45"},
      {"endpoint": "/api/v1/campaigns/create", "errors": 1, "status": "normal", "type": "autorização", "lastError": "2025-07-07 09:30"},
      {"endpoint": "/api/v1/reports/generate", "errors": 2, "status": "normal", "type": "timeout", "lastError": "2025-07-07 08:15"}
    ]
  },
  "recentActivity": [
    {"time": "30 min atrás", "account": "TechCorp - QA", "action": "Login de usuário", "type": "login"},
    {"time": "1 hora atrás", "account": "Individual - João Silva", "action": "Envio de 25 mensagens", "type": "activity"},
    {"time": "2 horas atrás", "account": "GM - Produção", "action": "Atualização de configurações", "type": "config"},
    {"time": "3 horas atrás", "account": "TechCorp - Marketing", "action": "Erro de API corrigido", "type": "error"},
    {"time": "1 dia atrás", "account": "Global Manufacturing", "action": "Relatório gerado", "type": "report"}
  ]
};

// Global variables
let currentFilters = {
  status: 'all',
  selectedAccount: null,
  searchTerm: '',
  period: 'all',
  startDate: null,
  endDate: null,
  apiSearch: '',
  apiStatus: 'all',
  apiType: 'all'
};

let charts = {};
let sortDirection = {};
let filteredData = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    setupDateInputs();
    renderAccountTree();
    renderErrorTypesGrid();
    renderApiErrorsList();
    renderRankingTable();
    renderActivityList();
    initializeCharts();
    setupSearch();
    setupTheme();
    populateErrorAccountFilter();
    updateFilteredData();
    handleResponsiveLayout();
}

function setupEventListeners() {
    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Notifications
    document.getElementById('notificationBtn').addEventListener('click', toggleNotifications);
    document.getElementById('closeNotifications').addEventListener('click', closeNotifications);
    
    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    
    // Filters
    document.getElementById('statusFilter').addEventListener('change', handleStatusFilter);
    document.getElementById('errorAccountFilter').addEventListener('change', handleErrorAccountFilter);
    document.getElementById('rankingSearch').addEventListener('input', handleRankingSearch);
    
    // Date filters
    document.getElementById('periodFilter').addEventListener('change', handlePeriodFilter);
    document.getElementById('startDate').addEventListener('change', handleCustomDateChange);
    document.getElementById('endDate').addEventListener('change', handleCustomDateChange);
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
    
    // API filters
    document.getElementById('apiSearchInput').addEventListener('input', handleApiSearch);
    document.getElementById('apiStatusFilter').addEventListener('change', handleApiStatusFilter);
    document.getElementById('apiTypeFilter').addEventListener('change', handleApiTypeFilter);
    
    // Export
    document.getElementById('exportBtn').addEventListener('click', exportRankingData);
    
    // Refresh activity
    document.getElementById('refreshActivity').addEventListener('click', refreshActivity);
    
    // Table sorting
    document.querySelectorAll('.ranking-table th[data-sort]').forEach(th => {
        th.addEventListener('click', () => handleTableSort(th.dataset.sort));
    });

    // Window resize handler for responsive behavior
    window.addEventListener('resize', handleResponsiveLayout);
}

function handleResponsiveLayout() {
    const sidebar = document.getElementById('sidebar');
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
        // Mobile: collapse sidebar by default
        sidebar.classList.add('collapsed');
        sidebar.classList.remove('show');
    } else {
        // Desktop: show sidebar by default
        sidebar.classList.remove('collapsed', 'show');
    }
}

function setupDateInputs() {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekAgoStr = weekAgo.toISOString().split('T')[0];
    
    document.getElementById('startDate').max = todayStr;
    document.getElementById('endDate').max = todayStr;
    document.getElementById('startDate').value = weekAgoStr;
    document.getElementById('endDate').value = todayStr;
}

function handlePeriodFilter(e) {
    const period = e.target.value;
    const customDateRange = document.getElementById('customDateRange');
    
    currentFilters.period = period;
    
    if (period === 'custom') {
        customDateRange.classList.add('show');
    } else {
        customDateRange.classList.remove('show');
    }
    
    showLoading();
    
    setTimeout(() => {
        updateFilteredData();
        updatePeriodIndicator();
        refreshAllViews();
        hideLoading();
    }, 800);
}

function handleCustomDateChange() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (startDate && endDate && startDate <= endDate) {
        currentFilters.startDate = startDate;
        currentFilters.endDate = endDate;
        
        showLoading();
        
        setTimeout(() => {
            updateFilteredData();
            updatePeriodIndicator();
            refreshAllViews();
            hideLoading();
        }, 800);
    }
}

function updatePeriodIndicator() {
    const indicator = document.getElementById('periodIndicator');
    const periodText = indicator.querySelector('.period-text');
    
    let text = '';
    
    switch (currentFilters.period) {
        case 'all':
            text = 'Exibindo dados de todos os períodos';
            break;
        case '7':
            text = 'Exibindo dados dos últimos 7 dias';
            break;
        case '30':
            text = 'Exibindo dados dos últimos 30 dias';
            break;
        case '90':
            text = 'Exibindo dados dos últimos 90 dias';
            break;
        case 'custom':
            if (currentFilters.startDate && currentFilters.endDate) {
                const start = new Date(currentFilters.startDate).toLocaleDateString('pt-BR');
                const end = new Date(currentFilters.endDate).toLocaleDateString('pt-BR');
                text = `Exibindo dados de ${start} até ${end}`;
            } else {
                text = 'Selecione as datas para filtrar';
            }
            break;
    }
    
    periodText.textContent = text;
    
    if (currentFilters.period !== 'all') {
        indicator.classList.add('active');
    } else {
        indicator.classList.remove('active');
    }
}

function updateFilteredData() {
    // Simulate data filtering based on period
    filteredData = JSON.parse(JSON.stringify(applicationData));
    
    if (currentFilters.period !== 'all') {
        // Simulate different data for different periods
        const factor = getPeriodFactor();
        
        // Adjust error metrics
        filteredData.errorMetrics.totalMonth = Math.round(filteredData.errorMetrics.totalMonth * factor);
        filteredData.errorMetrics.byDay = filteredData.errorMetrics.byDay.map(day => ({
            ...day,
            errors: Math.round(day.errors * factor)
        }));
        
        filteredData.errorMetrics.byType = filteredData.errorMetrics.byType.map(type => ({
            ...type,
            count: Math.round(type.count * factor)
        }));
        
        // Adjust channel metrics
        filteredData.channelMetrics.totalMTMO = Math.round(filteredData.channelMetrics.totalMTMO * factor);
        filteredData.channelMetrics.byChannel = filteredData.channelMetrics.byChannel.map(channel => ({
            ...channel,
            mtmo: Math.round(channel.mtmo * factor)
        }));
        
        // Adjust API errors
        filteredData.apiErrors.total = Math.round(filteredData.apiErrors.total * factor);
        filteredData.apiErrors.byEndpoint = filteredData.apiErrors.byEndpoint.map(endpoint => ({
            ...endpoint,
            errors: Math.max(1, Math.round(endpoint.errors * factor))
        }));
        
        // Adjust account volumes
        filteredData.accounts = filteredData.accounts.map(account => ({
            ...account,
            mtmoVolume: Math.round(account.mtmoVolume * factor),
            channels: Object.fromEntries(
                Object.entries(account.channels).map(([key, value]) => [key, Math.round(value * factor)])
            )
        }));
    }
}

function getPeriodFactor() {
    switch (currentFilters.period) {
        case '7':
            return 0.25;
        case '30':
            return 0.8;
        case '90':
            return 1.2;
        case 'custom':
            if (currentFilters.startDate && currentFilters.endDate) {
                const start = new Date(currentFilters.startDate);
                const end = new Date(currentFilters.endDate);
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                return Math.min(1.5, Math.max(0.1, days / 30));
            }
            return 1;
        default:
            return 1;
    }
}

function refreshAllViews() {
    updateSummaryCards();
    updateCharts();
    renderErrorTypesGrid();
    renderApiErrorsList();
    renderRankingTable();
}

function updateSummaryCards() {
    const data = filteredData;
    
    document.getElementById('totalAccounts').textContent = data.accounts.length;
    document.getElementById('activeAccounts').textContent = data.accounts.filter(acc => acc.status === 'active').length;
    document.getElementById('suspendedAccounts').textContent = data.accounts.filter(acc => acc.status === 'suspended').length;
    document.getElementById('totalVolume').textContent = data.channelMetrics.totalMTMO.toLocaleString();
    
    document.getElementById('channelTotal').textContent = data.channelMetrics.totalMTMO.toLocaleString();
    document.getElementById('errorTypesTotal').textContent = data.errorMetrics.totalMonth;
    document.getElementById('apiErrorsTotal').textContent = data.apiErrors.total;
}

function handleApiSearch(e) {
    currentFilters.apiSearch = e.target.value.toLowerCase();
    renderApiErrorsList();
}

function handleApiStatusFilter(e) {
    currentFilters.apiStatus = e.target.value;
    renderApiErrorsList();
}

function handleApiTypeFilter(e) {
    currentFilters.apiType = e.target.value;
    renderApiErrorsList();
}

function clearAllFilters() {
    currentFilters = {
        status: 'all',
        selectedAccount: null,
        searchTerm: '',
        period: 'all',
        startDate: null,
        endDate: null,
        apiSearch: '',
        apiStatus: 'all',
        apiType: 'all'
    };
    
    // Reset all form elements
    document.getElementById('statusFilter').value = 'all';
    document.getElementById('periodFilter').value = 'all';
    document.getElementById('errorAccountFilter').value = 'all'; // Fix: Reset error account filter
    document.getElementById('apiSearchInput').value = '';
    document.getElementById('apiStatusFilter').value = 'all';
    document.getElementById('apiTypeFilter').value = 'all';
    document.getElementById('rankingSearch').value = '';
    document.getElementById('globalSearch').value = '';
    document.getElementById('customDateRange').classList.remove('show');
    
    // Clear search results
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('show');
    
    // Clear active account selection
    document.querySelectorAll('.account-tree-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Clear table search
    const tbody = document.getElementById('rankingTableBody');
    tbody.querySelectorAll('tr').forEach(row => {
        row.style.display = '';
    });
    
    showLoading();
    
    setTimeout(() => {
        updateFilteredData();
        updatePeriodIndicator();
        refreshAllViews();
        renderAccountTree();
        hideLoading();
    }, 500);
}

function showLoading() {
    document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('show');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    if (window.innerWidth <= 768) {
        // Mobile: toggle show class
        sidebar.classList.toggle('show');
    } else {
        // Desktop: toggle collapsed class
        sidebar.classList.toggle('collapsed');
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (body.dataset.colorScheme === 'dark') {
        body.dataset.colorScheme = 'light';
        themeIcon.textContent = '🌙';
    } else {
        body.dataset.colorScheme = 'dark';
        themeIcon.textContent = '☀️';
    }
    
    localStorage.setItem('theme', body.dataset.colorScheme);
}

function setupTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme) {
        body.dataset.colorScheme = savedTheme;
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('show');
}

function closeNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.remove('show');
}

function closeModal() {
    const modal = document.getElementById('accountModal');
    modal.classList.remove('show');
}

function renderAccountTree() {
    const container = document.getElementById('accountTree');
    const { accounts } = filteredData;
    
    const filteredAccounts = currentFilters.status === 'all' 
        ? accounts 
        : accounts.filter(acc => acc.status === currentFilters.status);
    
    const rootAccounts = filteredAccounts.filter(acc => !acc.parent);
    
    container.innerHTML = '';
    
    rootAccounts.forEach(account => {
        renderAccountNode(account, container, 0, filteredAccounts);
    });
}

function renderAccountNode(account, container, level, filteredAccounts) {
    const item = document.createElement('div');
    item.className = `account-tree-item ${level > 0 ? (level === 1 ? 'child' : 'grandchild') : ''}`;
    item.dataset.accountId = account.id;
    
    item.innerHTML = `
        <span class="account-icon">${getAccountIcon(account.type)}</span>
        <span class="account-name">${account.name}</span>
        <span class="account-status ${account.status}">${getStatusText(account.status)}</span>
    `;
    
    item.addEventListener('click', () => selectAccount(account));
    container.appendChild(item);
    
    if (account.children && account.children.length > 0) {
        account.children.forEach(childId => {
            const childAccount = filteredAccounts.find(acc => acc.id === childId);
            if (childAccount) {
                renderAccountNode(childAccount, container, level + 1, filteredAccounts);
            }
        });
    }
}

function getAccountIcon(type) {
    const icons = {
        enterprise: '🏢',
        department: '🏬',
        team: '👥',
        individual: '👤',
        startup: '🚀'
    };
    return icons[type] || '📊';
}

function getStatusText(status) {
    const statusMap = {
        active: 'Ativo',
        suspended: 'Suspenso',
        trial: 'Trial',
        limited: 'Limitado'
    };
    return statusMap[status] || status;
}

function selectAccount(account) {
    document.querySelectorAll('.account-tree-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const selectedItem = document.querySelector(`[data-account-id="${account.id}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
    
    currentFilters.selectedAccount = account.id;
    showAccountDetails(account);
}

function showAccountDetails(account) {
    const modal = document.getElementById('accountModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    title.textContent = `Detalhes - ${account.name}`;
    
    body.innerHTML = `
        <div class="modal-account-details">
            <div class="detail-grid">
                <div class="detail-item">
                    <strong>ID:</strong> <span class="account-id">${account.id}</span>
                </div>
                <div class="detail-item">
                    <strong>Tipo:</strong> <span class="account-type ${account.type}">${account.type}</span>
                </div>
                <div class="detail-item">
                    <strong>Status:</strong> <span class="account-status ${account.status}">${getStatusText(account.status)}</span>
                </div>
                <div class="detail-item">
                    <strong>Região:</strong> ${account.region}
                </div>
                <div class="detail-item">
                    <strong>Usuários:</strong> ${account.users.toLocaleString()}
                </div>
                <div class="detail-item">
                    <strong>Contatos:</strong> ${account.contacts.toLocaleString()}
                </div>
                <div class="detail-item">
                    <strong>Volume MT/MO:</strong> ${account.mtmoVolume.toLocaleString()}
                </div>
                <div class="detail-item">
                    <strong>Último Acesso:</strong> ${account.lastActivity}
                </div>
            </div>
            
            <div class="channels-breakdown">
                <h4>Distribuição por Canal</h4>
                <div class="channel-items">
                    ${Object.entries(account.channels).map(([channel, count]) => `
                        <div class="channel-item">
                            <span class="channel-name">${channel.charAt(0).toUpperCase() + channel.slice(1)}</span>
                            <span class="channel-count">${count.toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function renderErrorTypesGrid() {
    const container = document.getElementById('errorTypesGrid');
    const { errorMetrics } = filteredData;
    
    container.innerHTML = errorMetrics.byType.map(errorType => `
        <div class="error-type-item">
            <div class="error-type-name">${errorType.type}</div>
            <div class="error-type-count">${errorType.count}</div>
            <div class="error-type-percentage">${errorType.percentage}%</div>
        </div>
    `).join('');
}

function renderApiErrorsList() {
    const container = document.getElementById('apiErrorsList');
    const filterCount = document.getElementById('apiFilterCount');
    const { apiErrors } = filteredData;
    
    let filteredEndpoints = apiErrors.byEndpoint;
    
    // Apply search filter
    if (currentFilters.apiSearch) {
        filteredEndpoints = filteredEndpoints.filter(endpoint => 
            endpoint.endpoint.toLowerCase().includes(currentFilters.apiSearch)
        );
    }
    
    // Apply status filter
    if (currentFilters.apiStatus !== 'all') {
        filteredEndpoints = filteredEndpoints.filter(endpoint => 
            endpoint.status === currentFilters.apiStatus
        );
    }
    
    // Apply type filter
    if (currentFilters.apiType !== 'all') {
        filteredEndpoints = filteredEndpoints.filter(endpoint => 
            endpoint.type === currentFilters.apiType
        );
    }
    
    // Update filter count
    filterCount.textContent = `Mostrando ${filteredEndpoints.length} de ${apiErrors.byEndpoint.length} endpoints`;
    
    container.innerHTML = filteredEndpoints.map(error => `
        <div class="api-error-item">
            <div class="api-error-content">
                <div class="api-error-endpoint">${error.endpoint}</div>
                <div class="api-error-meta">
                    <span class="api-error-type">${error.type}</span>
                    <span class="api-error-last">Último erro: ${error.lastError}</span>
                </div>
            </div>
            <div class="api-error-stats">
                <div class="api-error-count">${error.errors}</div>
                <div class="api-error-status ${error.status}">${error.status}</div>
            </div>
            <div class="api-error-actions">
                <button class="api-error-btn">Ver logs</button>
                <button class="api-error-btn">Detalhes</button>
            </div>
        </div>
    `).join('');
}

function renderRankingTable() {
    const tbody = document.getElementById('rankingTableBody');
    const { accounts } = filteredData;
    
    const sortedAccounts = [...accounts].sort((a, b) => b.mtmoVolume - a.mtmoVolume);
    
    tbody.innerHTML = sortedAccounts.map(account => `
        <tr>
            <td><span class="account-id">${account.id}</span></td>
            <td>${account.name}</td>
            <td>${account.contacts.toLocaleString()}</td>
            <td>${account.users.toLocaleString()}</td>
            <td>${account.mtmoVolume.toLocaleString()}</td>
            <td>${account.region}</td>
            <td>${account.lastActivity}</td>
            <td><span class="account-status ${account.status}">${getStatusText(account.status)}</span></td>
        </tr>
    `).join('');
}

function renderActivityList() {
    const container = document.getElementById('activityList');
    const { recentActivity } = filteredData;
    
    container.innerHTML = recentActivity.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                ${getActivityIcon(activity.type)}
            </div>
            <div class="activity-content">
                <div class="activity-action">${activity.action}</div>
                <div class="activity-account">${activity.account}</div>
            </div>
            <div class="activity-time">${activity.time}</div>
        </div>
    `).join('');
}

function getActivityIcon(type) {
    const icons = {
        login: '🔑',
        activity: '📊',
        config: '⚙️',
        error: '❌',
        report: '📋'
    };
    return icons[type] || '📌';
}

function initializeCharts() {
    initializeErrorsChart();
    initializeChannelsChart();
}

function updateCharts() {
    if (charts.errors) {
        charts.errors.destroy();
    }
    if (charts.channels) {
        charts.channels.destroy();
    }
    initializeCharts();
}

function initializeErrorsChart() {
    const ctx = document.getElementById('errorsChart').getContext('2d');
    const { errorMetrics } = filteredData;
    
    charts.errors = new Chart(ctx, {
        type: 'line',
        data: {
            labels: errorMetrics.byDay.map(day => {
                const date = new Date(day.date);
                return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
            }),
            datasets: [{
                label: 'Erros por Dia',
                data: errorMetrics.byDay.map(day => day.errors),
                borderColor: '#DB4545',
                backgroundColor: 'rgba(219, 69, 69, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function initializeChannelsChart() {
    const ctx = document.getElementById('channelsChart').getContext('2d');
    const { channelMetrics } = filteredData;
    
    charts.channels = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: channelMetrics.byChannel.map(channel => channel.channel),
            datasets: [{
                data: channelMetrics.byChannel.map(channel => channel.percentage),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function setupSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        
        if (term.length < 2) {
            searchResults.classList.remove('show');
            return;
        }
        
        const filteredAccounts = filteredData.accounts.filter(account => 
            account.id.toLowerCase().includes(term) || 
            account.name.toLowerCase().includes(term)
        );
        
        if (filteredAccounts.length > 0) {
            searchResults.innerHTML = filteredAccounts.map(account => `
                <div class="search-result-item" data-account-id="${account.id}">
                    <div class="search-result-id">${account.id}</div>
                    <div class="search-result-name">${account.name}</div>
                    <div class="search-result-status">
                        <span class="account-status ${account.status}">${getStatusText(account.status)}</span>
                    </div>
                </div>
            `).join('');
            
            searchResults.classList.add('show');
            
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const accountId = this.dataset.accountId;
                    const account = filteredData.accounts.find(acc => acc.id === accountId);
                    if (account) {
                        selectAccount(account);
                        searchInput.value = '';
                        searchResults.classList.remove('show');
                    }
                });
            });
        } else {
            searchResults.innerHTML = '<div class="search-result-item">Nenhuma conta encontrada</div>';
            searchResults.classList.add('show');
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('show');
        }
    });
}

function handleStatusFilter(e) {
    currentFilters.status = e.target.value;
    renderAccountTree();
}

function handleErrorAccountFilter(e) {
    const selectedAccount = e.target.value;
    console.log('Filtering errors for account:', selectedAccount);
}

function handleRankingSearch(e) {
    const term = e.target.value.toLowerCase();
    const tbody = document.getElementById('rankingTableBody');
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(term)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function handleTableSort(column) {
    const tbody = document.getElementById('rankingTableBody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const th = document.querySelector(`th[data-sort="${column}"]`);
    
    const isAsc = sortDirection[column] !== 'asc';
    sortDirection[column] = isAsc ? 'asc' : 'desc';
    
    document.querySelectorAll('th.sorted').forEach(el => {
        el.classList.remove('sorted', 'desc');
    });
    th.classList.add('sorted');
    if (!isAsc) th.classList.add('desc');
    
    rows.sort((a, b) => {
        const aValue = getCellValue(a, column);
        const bValue = getCellValue(b, column);
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return isAsc ? aValue - bValue : bValue - aValue;
        }
        
        return isAsc ? 
            aValue.localeCompare(bValue) : 
            bValue.localeCompare(aValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

function getCellValue(row, column) {
    const columnMap = {
        id: 0,
        name: 1,
        contacts: 2,
        users: 3,
        mtmo: 4,
        region: 5,
        lastActivity: 6,
        status: 7
    };
    
    const cell = row.cells[columnMap[column]];
    const text = cell.textContent.trim();
    
    if (['contacts', 'users', 'mtmo'].includes(column)) {
        return parseInt(text.replace(/[^\d]/g, ''));
    }
    
    return text;
}

function exportRankingData() {
    try {
        const btn = document.getElementById('exportBtn');
        const originalText = btn.textContent;
        
        btn.textContent = 'Exportando...';
        btn.disabled = true;
        
        const table = document.getElementById('rankingTable');
        const rows = table.querySelectorAll('tr');
        
        let csvContent = '\uFEFF';
        
        rows.forEach((row) => {
            const cells = row.querySelectorAll('th, td');
            const rowData = Array.from(cells).map(cell => {
                let text = cell.textContent.trim();
                if (text.includes(',') || text.includes('"') || text.includes('\n')) {
                    text = '"' + text.replace(/"/g, '""') + '"';
                }
                return text;
            });
            csvContent += rowData.join(',') + '\n';
        });
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `ranking_contas_pipeone_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            btn.textContent = 'Exportado!';
            btn.classList.add('btn--success');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.classList.remove('btn--success');
            }, 2000);
        }
    } catch (error) {
        console.error('Error exporting CSV:', error);
        const btn = document.getElementById('exportBtn');
        btn.textContent = 'Erro na exportação';
        btn.classList.add('btn--error');
        
        setTimeout(() => {
            btn.textContent = 'Exportar CSV';
            btn.disabled = false;
            btn.classList.remove('btn--error');
        }, 2000);
    }
}

function refreshActivity() {
    const btn = document.getElementById('refreshActivity');
    const originalText = btn.textContent;
    
    btn.innerHTML = '<span class="loading"></span> Atualizando...';
    btn.disabled = true;
    
    setTimeout(() => {
        renderActivityList();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1000);
}

function populateErrorAccountFilter() {
    const select = document.getElementById('errorAccountFilter');
    const { accounts } = applicationData;
    
    accounts.forEach(account => {
        const option = document.createElement('option');
        option.value = account.id;
        option.textContent = account.name;
        select.appendChild(option);
    });
}

// Initialize filtered data and update period indicator on load
updateFilteredData();
updatePeriodIndicator();

// Simulate real-time updates
setInterval(() => {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        const current = parseInt(badge.textContent);
        if (Math.random() > 0.8) {
            badge.textContent = current + 1;
        }
    }
}, 30000);