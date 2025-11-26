// Customer data storage and state management
let currentView = 'arAging';
let allCustomersData = [];

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCustomerData();
    setupEventListeners();
    renderTable();
});

// Sample customer data
function initializeCustomerData() {
    allCustomersData = [
        {
            id: 1,
            name: "GoGo CTV",
            tags: ["Strategic", "Enterprise"],
            externalId: "ACM001",
            healthScore: 4,
            dso: 32,
            outstanding: 125000,
            currentDue: 50000,
            overdue: 75000,
            openInvoices: 5,
            aging: {
                "1-30": 25000,
                "31-60": 35000,
                "61-90": 15000,
                "91-120": 0,
                "121-180": 0,
                ">180": 0
            },
            collectionStatus: "Current Dues",
            lastActivity: "2025-11-18 • Email opened"
        },
        {
            id: 2,
            name: "Future Today Inc",
            tags: ["Good Customer"],
            externalId: "XYZ002",
            healthScore: 3,
            dso: 47,
            outstanding: 210000,
            currentDue: 75000,
            overdue: 135000,
            openInvoices: 8,
            aging: {
                "1-30": 75000,
                "31-60": 85000,
                "61-90": 50000,
                "91-120": 0,
                "121-180": 0,
                ">180": 0
            },
            collectionStatus: "Dunning",
            lastActivity: "2025-11-17 • Email sent"
        },
        {
            id: 3,
            name: "Scripps Media, Inc.",
            tags: ["Enterprise"],
            externalId: "MED003",
            healthScore: 5,
            dso: 28,
            outstanding: 85000,
            currentDue: 85000,
            overdue: 0,
            openInvoices: 3,
            aging: {
                "1-30": 85000,
                "31-60": 0,
                "61-90": 0,
                "91-120": 0,
                "121-180": 0,
                ">180": 0
            },
            collectionStatus: "Current Dues",
            lastActivity: "2025-11-16 • Payment received"
        },
        {
            id: 4,
            name: "Blue Ant TV (US) LLC",
            tags: ["At Risk"],
            externalId: "STR004",
            healthScore: 2,
            dso: 65,
            outstanding: 175000,
            currentDue: 40000,
            overdue: 135000,
            openInvoices: 7,
            aging: {
                "1-30": 40000,
                "31-60": 45000,
                "61-90": 50000,
                "91-120": 40000,
                "121-180": 0,
                ">180": 0
            },
            collectionStatus: "Dispute",
            lastActivity: "2025-11-15 • Dispute open"
        },
        {
            id: 5,
            name: "Hasbro Studios LLC",
            tags: ["Strategic"],
            externalId: "GLB005",
            healthScore: 1,
            dso: 92,
            outstanding: 320000,
            currentDue: 50000,
            overdue: 250000,
            openInvoices: 12,
            aging: {
                "1-30": 50000,
                "31-60": 70000,
                "61-90": 80000,
                "91-120": 60000,
                "121-180": 40000,
                ">180": 0
            },
            collectionStatus: "Escalation",
            lastActivity: "2025-11-14 • Call logged"
        }
    ];
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('topSearch').addEventListener('input', handleSearch);
    
    // View toggle functionality
    document.getElementById('arAgingBtn').addEventListener('click', () => switchView('arAging'));
    document.getElementById('allCustomersBtn').addEventListener('click', () => switchView('allCustomers'));
    
    // Topbar buttons
    document.querySelector('.topbar .left .btn').addEventListener('click', toggleSidebar);
    document.querySelector('.topbar .right .btn:nth-child(1)').addEventListener('click', handleExport);
    document.querySelector('.topbar .right .btn:nth-child(2)').addEventListener('click', handleFilters);
    document.querySelector('.topbar .right div[style*="background:#2d8bd6"]').addEventListener('click', handleUserMenu);
    
    // Table sorting
    setupTableSorting();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Switch between AR Aging and All Customers views
function switchView(view) {
    currentView = view;
    
    // Update button states
    document.getElementById('arAgingBtn').classList.toggle('active', view === 'arAging');
    document.getElementById('allCustomersBtn').classList.toggle('active', view === 'allCustomers');
    
    // Re-render table with new view
    renderTable();
    
    console.log(`Switched to ${view} view`);
}

// Render table based on current view
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    
    if (currentView === 'allCustomers') {
        tableBody.innerHTML = generateAllCustomersRows();
    } else {
        tableBody.innerHTML = generateARAgingRows();
    }
    
    // Re-attach sorting handlers to new rows
    setupTableSorting();
}

// Generate rows for AR Aging view
function generateARAgingRows() {
    return allCustomersData.map(customer => `
        <tr>
            <td>
                <a href="customer-details.html?id=${customer.id}" class="customer-name customer-link" data-customer-id="${customer.id}">
                    ${customer.name}
                </a>
            </td>
            <td><div class="tags">${customer.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></td>
            <td>${customer.externalId}</td>
            <td><span class="badge ${getHealthScoreClass(customer.healthScore)}">${customer.healthScore}</span></td>
            <td>${customer.dso}</td>
            <td class="amount">$${customer.outstanding.toLocaleString()}</td>
            <td>$${customer.currentDue.toLocaleString()}</td>
            <td class="amount ${customer.overdue > 0 ? 'red' : ''}">$${customer.overdue.toLocaleString()}</td>
            <td>${customer.openInvoices}</td>
            <td>$${customer.aging["1-30"].toLocaleString()}</td>
            <td>$${customer.aging["31-60"].toLocaleString()}</td>
            <td>$${customer.aging["61-90"].toLocaleString()}</td>
            <td>$${customer.aging["91-120"].toLocaleString()}</td>
            <td>$${customer.aging["121-180"].toLocaleString()}</td>
            <td>$${customer.aging[">180"].toLocaleString()}</td>
            <td><span class="badge ${getStatusClass(customer.collectionStatus)}">${customer.collectionStatus}</span></td>
            <td>${customer.lastActivity}</td>
        </tr>
    `).join('');
}

// Generate rows for All Customers view (with more details)
function generateAllCustomersRows() {
    return allCustomersData.map(customer => `
        <tr class="customer-row-expanded">
            <td>
                <a href="customer-details.html?id=${customer.id}" class="customer-name customer-link" data-customer-id="${customer.id}">
                    ${customer.name}
                </a>
                <div class="customer-contact">Contact: ${customer.externalId}@company.com</div>
            </td>
            <td><div class="tags">${customer.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></td>
            <td>${customer.externalId}</td>
            <td><span class="badge ${getHealthScoreClass(customer.healthScore)}">${customer.healthScore}</span></td>
            <td>${customer.dso}</td>
            <td class="amount">$${customer.outstanding.toLocaleString()}</td>
            <td>$${customer.currentDue.toLocaleString()}</td>
            <td class="amount ${customer.overdue > 0 ? 'red' : ''}">$${customer.overdue.toLocaleString()}</td>
            <td>${customer.openInvoices}</td>
            <td>$${customer.aging["1-30"].toLocaleString()}</td>
            <td>$${customer.aging["31-60"].toLocaleString()}</td>
            <td>$${customer.aging["61-90"].toLocaleString()}</td>
            <td>$${customer.aging["91-120"].toLocaleString()}</td>
            <td>$${customer.aging["121-180"].toLocaleString()}</td>
            <td>$${customer.aging[">180"].toLocaleString()}</td>
            <td><span class="badge ${getStatusClass(customer.collectionStatus)}">${customer.collectionStatus}</span></td>
            <td>
                <div>${customer.lastActivity}</div>
                <div class="small-muted">Terms: Net ${customer.dso}</div>
            </td>
        </tr>
    `).join('');
}

// Helper functions
function getHealthScoreClass(score) {
    if (score >= 4) return 'green';
    if (score >= 3) return 'yellow';
    return 'red';
}

function getStatusClass(status) {
    switch(status) {
        case 'Current Dues': return 'green';
        case 'Dunning': return 'yellow';
        case 'Dispute': return 'red';
        case 'Escalation': return 'blue';
        default: return 'green';
    }
}

// Search functionality
function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    const rows = document.querySelectorAll('#combinedTable tbody tr');
    
    rows.forEach(r => {
        const txt = r.innerText.toLowerCase();
        r.style.display = q === '' || txt.includes(q) ? '' : 'none';
    });
}

// Sidebar toggle
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
    console.log('Menu toggle clicked');
}

// Export functionality
function handleExport() {
    console.log('Export button clicked');
    const viewType = currentView === 'arAging' ? 'AR Aging Report' : 'All Customers Report';
    alert(`Exporting ${viewType}...\nThis would generate a CSV/PDF file.`);
}

// Filters functionality
function handleFilters() {
    console.log('Filters button clicked');
    alert('Filters panel would open here\nYou could filter by:\n- Health Score\n- DSO Range\n- Outstanding Amount\n- Collection Status');
}

// User menu functionality
function handleUserMenu() {
    console.log('User avatar clicked');
    alert('User menu would open here\nOptions:\n- Profile Settings\n- Notification Preferences\n- Logout');
}

// Table sorting setup
function setupTableSorting() {
    document.querySelectorAll('#combinedTable thead th').forEach(th => {
        th.style.cursor = 'pointer';
        // Remove existing listeners to prevent duplicates
        th.replaceWith(th.cloneNode(true));
    });
    
    // Re-attach listeners to new elements
    document.querySelectorAll('#combinedTable thead th').forEach(th => {
        th.addEventListener('click', function() {
            handleColumnSort(this);
        });
    });
}

// Column sorting logic
function handleColumnSort(th) {
    th.style.opacity = 0.85;
    setTimeout(() => th.style.opacity = 1, 120);
    
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const columnIndex = Array.from(th.parentNode.children).indexOf(th);
    
    const isCurrentlySorted = th.getAttribute('data-sort');
    const sortDirection = isCurrentlySorted === 'asc' ? 'desc' : 'asc';
    
    table.querySelectorAll('th').forEach(header => {
        header.removeAttribute('data-sort');
    });
    
    th.setAttribute('data-sort', sortDirection);
    
    rows.sort((a, b) => {
        const aText = a.children[columnIndex].textContent.trim();
        const bText = b.children[columnIndex].textContent.trim();
        
        const aNum = parseFloat(aText.replace(/[^0-9.-]+/g, ""));
        const bNum = parseFloat(bText.replace(/[^0-9.-]+/g, ""));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
        }
        
        return sortDirection === 'asc' 
            ? aText.localeCompare(bText)
            : bText.localeCompare(aText);
    });
    
    rows.forEach(row => tbody.appendChild(row));
    console.log(`Sorted column ${columnIndex + 1} in ${sortDirection} order`);
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Ctrl+F or Cmd+F for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('topSearch').focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('topSearch');
        if (document.activeElement === searchInput && searchInput.value) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    }
    
    // Quick view switching
    if (e.ctrlKey && e.key === '1') {
        e.preventDefault();
        switchView('arAging');
    }
    
    if (e.ctrlKey && e.key === '2') {
        e.preventDefault();
        switchView('allCustomers');
    }
}

console.log('Dashboard initialized with enhanced functionality!');