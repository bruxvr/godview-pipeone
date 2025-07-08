// Application data
const appData = {
  companies: [
    {
      id: "acc_001",
      name: "TechCorp Enterprise",
      type: "enterprise",
      status: "active",
      parent: null,
      children: ["acc_002", "acc_003", "acc_004"],
      level: 1,
      userLimit: 5,
      currentUsers: 3,
      users: [
        {
          id: "u1",
          name: "João Silva",
          email: "joao@techcorp.com",
          role: "Admin",
          lastLogin: "2025-07-07 14:30",
          isOnline: true,
        },
        {
          id: "u2",
          name: "Maria Santos",
          email: "maria@techcorp.com",
          role: "Manager",
          lastLogin: "2025-07-07 13:15",
          isOnline: true,
        },
        {
          id: "u3",
          name: "Pedro Costa",
          email: "pedro@techcorp.com",
          role: "User",
          lastLogin: "2025-07-07 11:45",
          isOnline: false,
        },
      ],
      contacts: 15420,
      lastActivity: "2 horas atrás",
      region: "América do Norte",
      mtmoVolume: 3450,
      channels: { whatsapp: 1552, sms: 1035, email: 690, push: 173 },
    },
    {
      id: "acc_002",
      name: "TechCorp - Desenvolvimento",
      type: "department",
      status: "active",
      parent: "acc_001",
      children: ["acc_005"],
      level: 2,
      userLimit: 4,
      currentUsers: 2,
      users: [
        {
          id: "u4",
          name: "Ana Oliveira",
          email: "ana@techcorp.com",
          role: "Dev Lead",
          lastLogin: "2025-07-07 15:00",
          isOnline: true,
        },
        {
          id: "u5",
          name: "Carlos Lima",
          email: "carlos@techcorp.com",
          role: "Developer",
          lastLogin: "2025-07-07 14:20",
          isOnline: false,
        },
      ],
      contacts: 2890,
      lastActivity: "1 hora atrás",
      region: "América do Norte",
      mtmoVolume: 670,
      channels: { whatsapp: 300, sms: 200, email: 150, push: 20 },
    },
    {
      id: "acc_003",
      name: "TechCorp - Marketing",
      type: "department",
      status: "active",
      parent: "acc_001",
      children: [],
      level: 2,
      userLimit: 4,
      currentUsers: 2,
      users: [
        {
          id: "u6",
          name: "Lucia Ferreira",
          email: "lucia@techcorp.com",
          role: "Marketing Manager",
          lastLogin: "2025-07-07 12:30",
          isOnline: true,
        },
        {
          id: "u7",
          name: "Roberto Alves",
          email: "roberto@techcorp.com",
          role: "Designer",
          lastLogin: "2025-07-07 13:45",
          isOnline: true,
        },
      ],
      contacts: 8950,
      lastActivity: "3 horas atrás",
      region: "América do Norte",
      mtmoVolume: 1890,
      channels: { whatsapp: 850, sms: 567, email: 378, push: 95 },
    },
    {
      id: "acc_004",
      name: "TechCorp - Vendas",
      type: "department",
      status: "limited",
      parent: "acc_001",
      children: [],
      level: 2,
      userLimit: 4,
      currentUsers: 2,
      users: [
        {
          id: "u8",
          name: "Fernanda Costa",
          email: "fernanda@techcorp.com",
          role: "Sales Manager",
          lastLogin: "2025-07-07 10:15",
          isOnline: true,
        },
        {
          id: "u9",
          name: "Eduardo Silva",
          email: "eduardo@techcorp.com",
          role: "Sales Rep",
          lastLogin: "2025-07-07 11:30",
          isOnline: false,
        },
      ],
      contacts: 12450,
      lastActivity: "5 horas atrás",
      region: "América do Norte",
      mtmoVolume: 890,
      channels: { whatsapp: 402, sms: 268, email: 162, push: 58 },
    },
    {
      id: "acc_005",
      name: "TechCorp - Equipe QA",
      type: "team",
      status: "active",
      parent: "acc_002",
      children: [],
      level: 3,
      userLimit: 3,
      currentUsers: 2,
      users: [
        {
          id: "u10",
          name: "Paula Martins",
          email: "paula@techcorp.com",
          role: "QA Lead",
          lastLogin: "2025-07-07 16:00",
          isOnline: true,
        },
        {
          id: "u11",
          name: "Marcos Rocha",
          email: "marcos@techcorp.com",
          role: "QA Tester",
          lastLogin: "2025-07-07 15:30",
          isOnline: true,
        },
      ],
      contacts: 450,
      lastActivity: "30 minutos atrás",
      region: "América do Norte",
      mtmoVolume: 120,
      channels: { whatsapp: 54, sms: 36, email: 24, push: 6 },
    },
    {
      id: "acc_006",
      name: "Global Manufacturing Ltd",
      type: "enterprise",
      status: "active",
      parent: null,
      children: ["acc_007", "acc_008"],
      level: 1,
      userLimit: 4,
      currentUsers: 2,
      users: [
        {
          id: "u12",
          name: "James Wilson",
          email: "james@global.com",
          role: "CEO",
          lastLogin: "2025-07-06 18:00",
          isOnline: false,
        },
        {
          id: "u13",
          name: "Sarah Johnson",
          email: "sarah@global.com",
          role: "CTO",
          lastLogin: "2025-07-06 17:30",
          isOnline: true,
        },
      ],
      contacts: 9870,
      lastActivity: "1 dia atrás",
      region: "Europa",
      mtmoVolume: 2340,
      channels: { whatsapp: 1053, sms: 702, email: 468, push: 117 },
    },
    {
      id: "acc_007",
      name: "GM - Produção",
      type: "department",
      status: "active",
      parent: "acc_006",
      children: [],
      level: 2,
      userLimit: 3,
      currentUsers: 2,
      users: [
        {
          id: "u14",
          name: "Michael Brown",
          email: "michael@global.com",
          role: "Production Manager",
          lastLogin: "2025-07-07 14:00",
          isOnline: true,
        },
        {
          id: "u15",
          name: "Emma Davis",
          email: "emma@global.com",
          role: "Supervisor",
          lastLogin: "2025-07-07 13:00",
          isOnline: true,
        },
      ],
      contacts: 3450,
      lastActivity: "2 horas atrás",
      region: "Europa",
      mtmoVolume: 890,
      channels: { whatsapp: 401, sms: 267, email: 178, push: 44 },
    },
    {
      id: "acc_008",
      name: "GM - Logística",
      type: "department",
      status: "suspended",
      parent: "acc_006",
      children: [],
      level: 2,
      userLimit: 2,
      currentUsers: 1,
      users: [
        {
          id: "u16",
          name: "David Miller",
          email: "david@global.com",
          role: "Logistics Manager",
          lastLogin: "2025-07-04 16:00",
          isOnline: false,
        },
      ],
      contacts: 1200,
      lastActivity: "3 dias atrás",
      region: "Europa",
      mtmoVolume: 45,
      channels: { whatsapp: 20, sms: 15, email: 8, push: 2 },
    },
    {
      id: "acc_009",
      name: "StartupXYZ",
      type: "startup",
      status: "trial",
      parent: null,
      children: [],
      level: 1,
      userLimit: 3,
      currentUsers: 2,
      users: [
        {
          id: "u17",
          name: "Alex Chen",
          email: "alex@startupxyz.com",
          role: "Founder",
          lastLogin: "2025-07-07 12:00",
          isOnline: false,
        },
        {
          id: "u18",
          name: "Lisa Wang",
          email: "lisa@startupxyz.com",
          role: "Developer",
          lastLogin: "2025-07-07 11:00",
          isOnline: true,
        },
      ],
      contacts: 2340,
      lastActivity: "6 horas atrás",
      region: "Ásia Pacífico",
      mtmoVolume: 560,
      channels: { whatsapp: 252, sms: 168, email: 112, push: 28 },
    },
    {
      id: "acc_010",
      name: "Individual - João Silva",
      type: "individual",
      status: "active",
      parent: null,
      children: [],
      level: 1,
      userLimit: 1,
      currentUsers: 1,
      users: [
        {
          id: "u19",
          name: "João Silva",
          email: "joao.silva@email.com",
          role: "Owner",
          lastLogin: "2025-07-07 16:30",
          isOnline: true,
        },
      ],
      contacts: 150,
      lastActivity: "1 hora atrás",
      region: "Brasil",
      mtmoVolume: 35,
      channels: { whatsapp: 16, sms: 11, email: 6, push: 2 },
    },
  ],

  notifications: [
    {
      id: "n1",
      type: "login",
      message: "João Silva fez login",
      time: "5 min atrás",
      read: false,
    },
    {
      id: "n2",
      type: "error",
      message: "Erro de API detectado no endpoint /messages",
      time: "15 min atrás",
      read: false,
    },
    {
      id: "n3",
      type: "account",
      message: "TechCorp - Vendas foi limitada",
      time: "1 hora atrás",
      read: true,
    },
    {
      id: "n4",
      type: "user",
      message: "Maria Santos atualizou configurações",
      time: "2 horas atrás",
      read: true,
    },
    {
      id: "n5",
      type: "error",
      message: "Timeout na API de webhooks",
      time: "3 horas atrás",
      read: false,
    },
    {
      id: "n6",
      type: "login",
      message: "Ana Oliveira fez login",
      time: "4 horas atrás",
      read: true,
    },
  ],

  logs: [
    {
      id: "log1",
      type: "incoming",
      channel: "whatsapp",
      clientId: "client_001",
      message: "Olá, preciso de ajuda!",
      timestamp: "2025-07-08 16:30",
      account: "TechCorp",
    },
    {
      id: "log2",
      type: "outgoing",
      channel: "telegram",
      clientId: "client_002",
      message: "Mensagem enviada com sucesso",
      timestamp: "2025-07-08 16:25",
      account: "Global",
    },
    {
      id: "log3",
      type: "incoming",
      channel: "instagram",
      clientId: "client_003",
      message: "Status recebido",
      timestamp: "2025-07-08 16:20",
      account: "StartupXYZ",
    },
    {
      id: "log4",
      type: "outgoing",
      channel: "whatsapp",
      clientId: "client_004",
      message: "Resposta automática",
      timestamp: "2025-07-08 16:15",
      account: "TechCorp",
    },
    {
      id: "log5",
      type: "incoming",
      channel: "messenger",
      clientId: "client_005",
      message: "Nova mensagem recebida",
      timestamp: "2025-07-08 16:10",
      account: "Global",
    },
    {
      id: "log6",
      type: "outgoing",
      channel: "telegram",
      clientId: "client_006",
      message: "Notificação enviada",
      timestamp: "2025-07-08 16:05",
      account: "StartupXYZ",
    },
    {
      id: "log7",
      type: "incoming",
      channel: "whatsapp",
      clientId: "client_007",
      message: "Pergunta sobre produto",
      timestamp: "2025-07-08 16:00",
      account: "TechCorp",
    },
    {
      id: "log8",
      type: "outgoing",
      channel: "instagram",
      clientId: "client_008",
      message: "Story respondido",
      timestamp: "2025-07-08 15:55",
      account: "Global",
    },
    {
      id: "log9",
      type: "incoming",
      channel: "messenger",
      clientId: "client_009",
      message: "Feedback do cliente",
      timestamp: "2025-07-08 15:50",
      account: "StartupXYZ",
    },
    {
      id: "log10",
      type: "outgoing",
      channel: "whatsapp",
      clientId: "client_010",
      message: "Confirmação de pedido",
      timestamp: "2025-07-08 15:45",
      account: "TechCorp",
    },
    {
      id: "log11",
      type: "incoming",
      channel: "telegram",
      clientId: "client_011",
      message: "Solicitação de suporte",
      timestamp: "2025-07-08 15:40",
      account: "Global",
    },
    {
      id: "log12",
      type: "outgoing",
      channel: "instagram",
      clientId: "client_012",
      message: "Resposta ao comentário",
      timestamp: "2025-07-08 15:35",
      account: "StartupXYZ",
    },
    {
      id: "log13",
      type: "incoming",
      channel: "whatsapp",
      clientId: "client_013",
      message: "Dúvida sobre preços",
      timestamp: "2025-07-08 15:30",
      account: "TechCorp",
    },
    {
      id: "log14",
      type: "outgoing",
      channel: "messenger",
      clientId: "client_014",
      message: "Link enviado",
      timestamp: "2025-07-08 15:25",
      account: "Global",
    },
    {
      id: "log15",
      type: "incoming",
      channel: "telegram",
      clientId: "client_015",
      message: "Arquivo recebido",
      timestamp: "2025-07-08 15:20",
      account: "StartupXYZ",
    },
  ],

  errorMetrics: {
    totalMonth: 120,
    variation: -5,
    byDay: [
      { date: "2025-07-01", errors: 8 },
      { date: "2025-07-02", errors: 12 },
      { date: "2025-07-03", errors: 6 },
      { date: "2025-07-04", errors: 15 },
      { date: "2025-07-05", errors: 9 },
      { date: "2025-07-06", errors: 18 },
      { date: "2025-07-07", errors: 7 },
    ],
  },

  channelMetrics: {
    totalMTMO: 12300,
    variation: 10,
    byChannel: [
      { channel: "WhatsApp", active: 8, mtmo: 5535, percentage: 45 },
      { channel: "SMS", active: 6, mtmo: 3690, percentage: 30 },
      { channel: "Email", active: 5, mtmo: 2460, percentage: 20 },
      { channel: "Push", active: 3, mtmo: 615, percentage: 5 },
    ],
  },

  apiErrors: {
    byEndpoint: [
      {
        endpoint: "/api/v1/messages/send",
        errors: 6,
        status: "critical",
        type: "payload",
        lastError: "2025-07-07 14:30",
      },
      {
        endpoint: "/api/v1/auth/token",
        errors: 4,
        status: "warning",
        type: "autenticação",
        lastError: "2025-07-07 13:45",
      },
      {
        endpoint: "/api/v1/webhooks/receive",
        errors: 3,
        status: "warning",
        type: "timeout",
        lastError: "2025-07-07 12:15",
      },
      {
        endpoint: "/api/v1/accounts/validate",
        errors: 2,
        status: "normal",
        type: "validação",
        lastError: "2025-07-07 11:30",
      },
      {
        endpoint: "/api/v1/contacts/import",
        errors: 3,
        status: "warning",
        type: "payload",
        lastError: "2025-07-07 10:45",
      },
      {
        endpoint: "/api/v1/campaigns/create",
        errors: 1,
        status: "normal",
        type: "autorização",
        lastError: "2025-07-07 09:30",
      },
    ],
  },

  recentActivity: [
    {
      time: "30 min atrás",
      account: "TechCorp - QA",
      action: "Login de usuário",
      type: "login",
    },
    {
      time: "1 hora atrás",
      account: "Individual - João Silva",
      action: "Envio de 25 mensagens",
      type: "activity",
    },
    {
      time: "2 horas atrás",
      account: "GM - Produção",
      action: "Atualização de configurações",
      type: "config",
    },
    {
      time: "3 horas atrás",
      account: "TechCorp - Marketing",
      action: "Erro de API corrigido",
      type: "error",
    },
    {
      time: "1 dia atrás",
      account: "Global Manufacturing",
      action: "Relatório gerado",
      type: "report",
    },
  ],
};

// Global state
let selectedAccount = null;
let expandedAccounts = new Set();
let errorsChartInstance = null;
let channelChartInstance = null;
let currentLogsPage = 1;
let filteredLogs = [];
let filteredAccounts = [];

// Initialize application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  buildAccountsTree();
  applyAccountsTableFilters();
  applyApiErrorFilters();
  populateActivityFeed();
  populateNotifications();
  initializeCharts();
  applyTheme();
  searchLogs();
  initializeDateFilter();
}

function setupEventListeners() {
  // Sidebar toggle
  document
    .querySelector(".sidebar-toggle")
    .addEventListener("click", toggleSidebar);

  // Theme toggle
  document
    .querySelector(".theme-toggle")
    .addEventListener("click", toggleTheme);

  // Account search
  document
    .querySelector(".account-search")
    .addEventListener("input", handleAccountSearch);

  // Expand/collapse all buttons
  document.querySelector(".expand-all").addEventListener("click", expandAll);
  document
    .querySelector(".collapse-all")
    .addEventListener("click", collapseAll);

  // Ranking table filters
  document
    .getElementById("accountTableSearch")
    .addEventListener("input", applyAccountsTableFilters);
  document
    .getElementById("accountTableSort")
    .addEventListener("change", applyAccountsTableFilters);

  // API error filters
  document
    .getElementById("errorTypeFilter")
    .addEventListener("change", applyApiErrorFilters);
  document
    .getElementById("errorStatusFilter")
    .addEventListener("change", applyApiErrorFilters);
  document
    .getElementById("errorEndpointFilter")
    .addEventListener("change", applyApiErrorFilters);

  // Chart account filter
  document
    .getElementById("mtmoAccountFilter")
    .addEventListener("change", updateErrorsChart);

  // Log search
  document
    .getElementById("logTypeFilter")
    .addEventListener("change", resetLogsPagination);
  document
    .getElementById("logChannelFilter")
    .addEventListener("change", resetLogsPagination);
  document
    .getElementById("logDateFilter")
    .addEventListener("change", resetLogsPagination);
  document
    .getElementById("logClientIdFilter")
    .addEventListener("input", resetLogsPagination);

  // Modal close
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.querySelector(".modal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

  // Close notifications when clicking outside
  document.addEventListener("click", function (e) {
    const panel = document.getElementById("notificationsPanel");
    const toggle = document.querySelector(".notifications-toggle");
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      panel.classList.add("hidden");
    }
  });
}

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-color-scheme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-color-scheme", newTheme);
}

function applyTheme() {
  document.documentElement.setAttribute("data-color-scheme", "light");
}

function getAccountIcon(type) {
  const icons = {
    enterprise: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 21h18"/>
      <path d="M5 21V7l8-4v18"/>
      <path d="M19 21V11l-6-4"/>
    </svg>`,
    department: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
    team: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
    startup: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>`,
    individual: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,
  };
  return icons[type] || icons.individual;
}

function buildAccountsTree() {
  const treeContainer = document.getElementById("accountsTree");
  treeContainer.innerHTML = "";

  const rootAccounts = appData.companies.filter((account) => !account.parent);

  rootAccounts.forEach((account) => {
    const accountElement = createAccountElement(account, 0);
    treeContainer.appendChild(accountElement);
  });
}

function createAccountElement(account, depth) {
  const hasChildren = account.children && account.children.length > 0;
  const isExpanded = expandedAccounts.has(account.id);

  const accountDiv = document.createElement("div");
  accountDiv.className = "account-item";
  accountDiv.setAttribute("data-depth", depth);
  accountDiv.setAttribute("data-type", account.type);
  accountDiv.setAttribute("data-account-id", account.id);

  const accountHeader = document.createElement("div");
  accountHeader.className = "account-header";
  accountHeader.addEventListener("click", () => selectAccount(account));

  let expandButton = "";
  if (hasChildren) {
    expandButton = `
      <button class="expand-btn ${
        isExpanded ? "expanded" : ""
      }" onclick="toggleAccountExpansion('${account.id}', event)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>
    `;
  } else {
    expandButton = '<div style="width: 28px;"></div>'; // Spacer
  }

  accountHeader.innerHTML = `
    ${expandButton}
    <div class="account-icon account-icon--${account.type}">
      ${getAccountIcon(account.type)}
    </div>
    <div class="account-info">
      <div class="account-name">${account.name}</div>
      <div class="account-meta">
        <span class="account-status account-status--${
          account.status
        }">${getStatusText(account.status)}</span>
      </div>
    </div>
    <div class="account-actions">
      <button class="account-users-btn" onclick="toggleUsersPanel('${
        account.id
      }', event)">
        USERS
      </button>
      <button class="account-panel-btn" onclick="openAccountPanel('${
        account.id
      }', event)">
        abrir painel
      </button>
    </div>
  `;

  accountDiv.appendChild(accountHeader);

  if (hasChildren) {
    const childrenContainer = document.createElement("div");
    childrenContainer.className = `account-children ${
      isExpanded ? "" : "collapsed"
    }`;

    account.children.forEach((childId) => {
      const childAccount = appData.companies.find((acc) => acc.id === childId);
      if (childAccount) {
        const childElement = createAccountElement(childAccount, depth + 1);
        childrenContainer.appendChild(childElement);
      }
    });

    accountDiv.appendChild(childrenContainer);
  }

  return accountDiv;
}

function getStatusText(status) {
  const statusMap = {
    active: "Ativo",
    limited: "Limitado",
    suspended: "Suspenso",
    trial: "Trial",
  };
  return statusMap[status] || status;
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

function toggleAccountExpansion(accountId, event) {
  event.stopPropagation();

  if (expandedAccounts.has(accountId)) {
    expandedAccounts.delete(accountId);
  } else {
    expandedAccounts.add(accountId);
  }

  buildAccountsTree();
}

function selectAccount(account) {
  selectedAccount = account;

  // Update UI to show selected account
  document.querySelectorAll(".account-header").forEach((header) => {
    header.classList.remove("selected");
  });

  const selectedHeader = document.querySelector(
    `[data-account-id="${account.id}"] .account-header`
  );
  if (selectedHeader) {
    selectedHeader.classList.add("selected");
  }

  // Show account details modal
  showAccountModal(account);
}

function showAccountModal(account) {
  const modal = document.getElementById("accountModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = account.name;

  modalBody.innerHTML = `
    <div class="account-details">
      <div class="detail-section">
        <h4>Informações Gerais</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">Tipo:</span>
            <span class="detail-value">${account.type}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Status:</span>
            <span class="detail-value">
              <span class="account-status account-status--${
                account.status
              }">${getStatusText(account.status)}</span>
            </span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Região:</span>
            <span class="detail-value">${account.region}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Contatos:</span>
            <span class="detail-value">${formatNumber(account.contacts)}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">MTMO:</span>
            <span class="detail-value">${formatNumber(
              account.mtmoVolume
            )}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Última Atividade:</span>
            <span class="detail-value">${account.lastActivity}</span>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h4>Usuários (${account.users.length})</h4>
        <div class="users-list">
          ${account.users
            .map(
              (user) => `
            <div class="user-item">
              <div class="user-info">
                <strong>${user.name}</strong>
                <span class="user-role">${user.role}</span>
              </div>
              <div class="user-meta">
                <span>${user.email}</span>
                <span>Último login: ${user.lastLogin}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="detail-section">
        <h4>Canais de Comunicação</h4>
        <div class="channels-grid">
          ${Object.entries(account.channels)
            .map(
              ([channel, count]) => `
            <div class="channel-item">
              <span class="channel-name">${channel.toUpperCase()}</span>
              <span class="channel-count">${formatNumber(count)}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("accountModal").classList.remove("active");
}

function handleAccountSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const accountItems = document.querySelectorAll(".account-item");

  accountItems.forEach((item) => {
    const accountName = item
      .querySelector(".account-name")
      .textContent.toLowerCase();
    const shouldShow = accountName.includes(searchTerm) || searchTerm === "";

    item.style.display = shouldShow ? "block" : "none";

    // If showing a child item, make sure its parents are visible
    if (shouldShow && searchTerm !== "") {
      let parent = item.parentElement;
      while (parent && parent.classList.contains("account-children")) {
        parent.style.display = "block";
        parent.classList.remove("collapsed");
        parent = parent.parentElement;
        if (parent && parent.classList.contains("account-item")) {
          parent.style.display = "block";
        }
      }
    }
  });
}

function expandAll() {
  appData.companies.forEach((account) => {
    if (account.children && account.children.length > 0) {
      expandedAccounts.add(account.id);
    }
  });
  buildAccountsTree();
}

function collapseAll() {
  expandedAccounts.clear();
  buildAccountsTree();
}

// Notifications functionality
function toggleNotifications() {
  const panel = document.getElementById("notificationsPanel");
  panel.classList.toggle("hidden");
}

function populateNotifications() {
  const list = document.getElementById("notificationsList");
  list.innerHTML = "";

  appData.notifications.forEach((notification) => {
    const item = createNotificationElement(notification);
    list.appendChild(item);
  });

  updateNotificationBadge();
}

function createNotificationElement(notification) {
  const item = document.createElement("div");
  item.className = `notification-item ${notification.read ? "" : "unread"}`;

  item.addEventListener("click", () => {
    if (!notification.read) {
      notification.read = true;
      item.classList.remove("unread");
      updateNotificationBadge();
    }
  });

  item.innerHTML = `
    <div class="notification-content">
      <div class="notification-icon notification-icon--${notification.type}">●</div>
      <div class="notification-text">
        <div class="notification-message">${notification.message}</div>
        <div class="notification-time">${notification.time}</div>
      </div>
    </div>
  `;

  return item;
}

function updateNotificationBadge() {
  const unreadCount = appData.notifications.filter((n) => !n.read).length;
  const badge = document.getElementById("notificationBadge");
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? "inline-flex" : "none";
  }
}

function markAllAsRead() {
  appData.notifications.forEach((n) => (n.read = true));
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.classList.remove("unread");
  });
  updateNotificationBadge();
}

// Accounts table functionality
function applyAccountsTableFilters() {
  const searchTerm = document
    .getElementById("accountTableSearch")
    .value.toLowerCase();
  const sortOption = document.getElementById("accountTableSort").value;

  // Filter accounts
  filteredAccounts = appData.companies.filter((account) =>
    account.name.toLowerCase().includes(searchTerm)
  );

  // Sort accounts
  const [field, direction] = sortOption.split("-");
  filteredAccounts.sort((a, b) => {
    let valueA, valueB;

    switch (field) {
      case "mtmo":
        valueA = a.mtmoVolume;
        valueB = b.mtmoVolume;
        break;
      case "contacts":
        valueA = a.contacts;
        valueB = b.contacts;
        break;
      case "name":
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      default:
        valueA = 0;
        valueB = 0;
    }

    if (valueA === valueB) return 0;

    if (direction === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  renderAccountsTable();
}

function renderAccountsTable() {
  const tbody = document.getElementById("accountsTable");
  tbody.innerHTML = "";

  filteredAccounts.forEach((account) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="account-cell">
          <div class="account-icon account-icon--${account.type}">
            ${getAccountIcon(account.type)}
          </div>
          <span>${account.name}</span>
        </div>
      </td>
      <td><span class="type-badge type-badge--${account.type}">${
      account.type
    }</span></td>
      <td><span class="account-status account-status--${
        account.status
      }">${getStatusText(account.status)}</span></td>
      <td>${formatNumber(account.contacts)}</td>
      <td>${formatNumber(account.mtmoVolume)}</td>
      <td>
        <button class="btn btn--sm btn--secondary" onclick="selectAccount(${JSON.stringify(
          account
        ).replace(/"/g, "&quot;")})">
          Detalhes
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function exportAccountsCSV() {
  if (filteredAccounts.length === 0) {
    alert("Nenhuma conta para exportar");
    return;
  }

  const headers = ["Conta", "Tipo", "Status", "Contatos", "MTMO"];
  const rows = [
    headers.join(","),
    ...filteredAccounts.map((account) =>
      [
        `"${account.name}"`,
        account.type,
        account.status,
        account.contacts,
        account.mtmoVolume,
      ].join(",")
    ),
  ];

  const csvContent = rows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Create download link
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `ranking_contas_${new Date().getTime()}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

// API errors table functionality
function applyApiErrorFilters() {
  const typeFilter = document.getElementById("errorTypeFilter").value;
  const statusFilter = document.getElementById("errorStatusFilter").value;
  const endpointFilter = document.getElementById("errorEndpointFilter").value;

  const filteredErrors = appData.apiErrors.byEndpoint.filter((error) => {
    const typeMatch = typeFilter === "all" || error.type === typeFilter;
    const statusMatch = statusFilter === "all" || error.status === statusFilter;
    const endpointMatch =
      endpointFilter === "all" || error.endpoint === endpointFilter;

    return typeMatch && statusMatch && endpointMatch;
  });

  renderErrorsTable(filteredErrors);
}

function renderErrorsTable(errors) {
  const tbody = document.getElementById("errorsTable");
  tbody.innerHTML = "";

  errors.forEach((error) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><code>${error.endpoint}</code></td>
      <td>${error.type}</td>
      <td><span class="status status--${
        error.status === "critical"
          ? "error"
          : error.status === "warning"
          ? "warning"
          : "success"
      }">${error.status}</span></td>
      <td>${error.errors}</td>
      <td>${error.lastError}</td>
    `;
    tbody.appendChild(row);
  });
}

// Log search functionality
function resetLogsPagination() {
  currentLogsPage = 1;
  searchLogs();
}

function searchLogs() {
  const typeFilter = document.getElementById("logTypeFilter").value;
  const channelFilter = document.getElementById("logChannelFilter").value;
  const dateFilter = document.getElementById("logDateFilter").value;
  const clientIdFilter = document
    .getElementById("logClientIdFilter")
    .value.toLowerCase();

  filteredLogs = appData.logs.filter((log) => {
    const typeMatch = typeFilter === "all" || log.type === typeFilter;
    const channelMatch =
      channelFilter === "all" || log.channel === channelFilter;
    const dateMatch = !dateFilter || log.timestamp.startsWith(dateFilter);
    const clientIdMatch =
      !clientIdFilter || log.clientId.toLowerCase().includes(clientIdFilter);

    return typeMatch && channelMatch && dateMatch && clientIdMatch;
  });

  renderLogsTable();
}

function renderLogsTable() {
  const tbody = document.getElementById("logsTable");
  tbody.innerHTML = "";

  const itemsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(filteredLogs.length / itemsPerPage));

  if (currentLogsPage > totalPages) {
    currentLogsPage = totalPages;
  }

  const startIndex = (currentLogsPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageLogs = filteredLogs.slice(startIndex, endIndex);

  currentPageLogs.forEach((log) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${log.timestamp}</td>
      <td>${log.type}</td>
      <td>${log.channel}</td>
      <td>${log.clientId}</td>
      <td>${log.account}</td>
      <td>${log.message}</td>
    `;
    tbody.appendChild(row);
  });

  // Update pagination info
  const pageInfo = document.getElementById("pageInfo");
  if (pageInfo) {
    pageInfo.textContent = `Página ${currentLogsPage} de ${totalPages}`;
  }

  // Update button states
  const prevBtn = document.querySelector(
    ".pagination-controls button:first-child"
  );
  const nextBtn = document.querySelector(
    ".pagination-controls button:last-child"
  );

  if (prevBtn) prevBtn.disabled = currentLogsPage <= 1;
  if (nextBtn) nextBtn.disabled = currentLogsPage >= totalPages;
}

function previousPage() {
  if (currentLogsPage > 1) {
    currentLogsPage--;
    renderLogsTable();
  }
}

function nextPage() {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  if (currentLogsPage < totalPages) {
    currentLogsPage++;
    renderLogsTable();
  }
}

// Charts functionality
function initializeCharts() {
  updateErrorsChart();
  initializeChannelChart();
}

function updateErrorsChart() {
  const ctx = document.getElementById("errorsChart").getContext("2d");

  if (errorsChartInstance) {
    errorsChartInstance.destroy();
  }

  errorsChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: appData.errorMetrics.byDay.map((item) => {
        const date = new Date(item.date);
        return date.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        });
      }),
      datasets: [
        {
          label: "Erros por Dia",
          data: appData.errorMetrics.byDay.map((item) => item.errors),
          borderColor: "#1FB8CD",
          backgroundColor: "rgba(31, 184, 205, 0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

function initializeChannelChart() {
  const ctx = document.getElementById("channelChart").getContext("2d");

  channelChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: appData.channelMetrics.byChannel.map((item) => item.channel),
      datasets: [
        {
          data: appData.channelMetrics.byChannel.map((item) => item.percentage),
          backgroundColor: ["#1FB8CD", "#FFC185", "#B4413C", "#ECEBD5"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

// Activity feed
function populateActivityFeed() {
  const activityList = document.getElementById("activityList");
  activityList.innerHTML = "";

  appData.recentActivity.forEach((activity) => {
    const activityItem = document.createElement("div");
    activityItem.className = "activity-item";
    activityItem.innerHTML = `
      <div class="activity-icon activity-icon--${activity.type}">
        ${getActivityIcon(activity.type)}
      </div>
      <div class="activity-content">
        <div class="activity-title">${activity.action}</div>
        <div class="activity-meta">
          <span>${activity.account}</span> • <span>${activity.time}</span>
        </div>
      </div>
    `;
    activityList.appendChild(activityItem);
  });
}

function getActivityIcon(type) {
  const icons = {
    login: "L",
    activity: "A",
    config: "C",
    error: "E",
    report: "R",
  };
  return icons[type] || "A";
}

// Functions for sidebar buttons
function toggleUsersPanel(accountId, event) {
  event.stopPropagation();
  const account = appData.companies.find((acc) => acc.id === accountId);
  if (account) {
    selectAccount(account);
  }
}

function openAccountPanel(accountId, event) {
  event.stopPropagation();
  alert(`Abrir painel da conta ${accountId}`);
}

// Period filter functionality
function initializeDateFilter() {
  const periodSelect = document.getElementById("periodSelect");
  const customDateContainer = document.getElementById("customDateContainer");
  const customStartDateInput = document.getElementById("customStartDate");
  const customEndDateInput = document.getElementById("customEndDate");
  const applyButton = document.querySelector(".apply-period-filter");

  // Set default dates
  const today = new Date();
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);

  customStartDateInput.value = thirtyDaysAgo.toISOString().split("T")[0];
  customEndDateInput.value = today.toISOString().split("T")[0];

  // Handle period select change
  periodSelect.addEventListener("change", function () {
    if (this.value === "custom") {
      customDateContainer.classList.remove("hidden");
    } else {
      customDateContainer.classList.add("hidden");
    }
  });

  // Apply filter function
  function applyPeriodFilter() {
    const selectedPeriod = periodSelect.value;
    const today = new Date();
    let startDate, endDate;

    if (selectedPeriod === "custom") {
      const customStartDate = customStartDateInput.value;
      const customEndDate = customEndDateInput.value;

      if (!customStartDate || !customEndDate) {
        alert("Por favor, selecione ambas as datas");
        return;
      }

      startDate = new Date(customStartDate);
      endDate = new Date(customEndDate);

      if (startDate > endDate) {
        alert("A data inicial deve ser anterior ou igual à data final");
        return;
      }

      if (endDate > today) {
        alert("A data final não pode ser posterior a hoje");
        return;
      }
    } else {
      // Calculate start date based on selected period
      const daysAgo = parseInt(selectedPeriod);
      startDate = new Date(today);
      startDate.setDate(today.getDate() - daysAgo);
      endDate = today;
    }

    const startDateStr = startDate.toISOString().split("T")[0];
    const endDateStr = endDate.toISOString().split("T")[0];

    console.log(`Filtro aplicado: ${startDateStr} até ${endDateStr}`);

    // Refresh dashboard with the new date range
    refreshDashboardWithDateRange(startDateStr, endDateStr, selectedPeriod);
  }

  // Add event listener to apply button
  applyButton.addEventListener("click", applyPeriodFilter);

  // Add event listeners for Enter key on custom date inputs
  customStartDateInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      applyPeriodFilter();
    }
  });

  customEndDateInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      applyPeriodFilter();
    }
  });

  // Add event listener for period select change to auto-apply for non-custom options
  periodSelect.addEventListener("change", function () {
    if (this.value !== "custom") {
      // Auto-apply for predefined periods
      setTimeout(applyPeriodFilter, 100);
    }
  });

  // Apply default filter (1 month)
  applyPeriodFilter();
}

function refreshDashboardWithDateRange(startDate, endDate, period) {
  // This function would typically filter the data based on the date range
  // and refresh all dashboard components
  console.log(
    `Refreshing dashboard for period: ${startDate} to ${endDate} (${period})`
  );

  let periodText;
  switch (period) {
    case "7":
      periodText = "1 semana";
      break;
    case "15":
      periodText = "15 dias";
      break;
    case "30":
      periodText = "1 mês";
      break;
    case "custom":
      periodText = `período personalizado (${startDate} até ${endDate})`;
      break;
    default:
      periodText = period;
  }

  // Example: You could filter the appData based on dates here
  // and then call the existing functions to rebuild the dashboard

  // Dashboard updated silently - no popup notification
}

// Make functions available globally for onclick handlers
window.toggleAccountExpansion = toggleAccountExpansion;
window.selectAccount = selectAccount;
window.toggleNotifications = toggleNotifications;
window.markAllAsRead = markAllAsRead;
window.exportAccountsCSV = exportAccountsCSV;
window.searchLogs = searchLogs;
window.previousPage = previousPage;
window.nextPage = nextPage;
window.toggleUsersPanel = toggleUsersPanel;
window.openAccountPanel = openAccountPanel;
window.initializeDateFilter = initializeDateFilter;
window.refreshDashboardWithDateRange = refreshDashboardWithDateRange;
