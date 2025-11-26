// Customer data for details page (should match main dashboard data)
const customerData = {
    1: {
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
        lastActivity: "2025-11-18 • Email opened",
        contact: {
            email: "john.doe@gogotv.com",
            phone: "+1-555-0101",
            address: "123 Media St, New York, NY"
        },
        paymentTerms: "Net 30",
        creditLimit: 500000,
        totalSales: 1250000,
        invoices: [
            { id: "INV-2025-001", issueDate: "2025-10-28", currency: "USD", amount: 25000, dueDate: "2025-11-27", status: "open" },
            { id: "INV-2025-002", issueDate: "2025-10-15", currency: "USD", amount: 35000, dueDate: "2025-11-14", status: "overdue" },
            { id: "INV-2025-003", issueDate: "2025-09-20", currency: "USD", amount: 15000, dueDate: "2025-10-20", status: "overdue" }
        ]
    },
    2: {
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
        lastActivity: "2025-11-17 • Email sent",
        contact: {
            email: "sarah.wilson@futuretoday.com",
            phone: "+1-555-0102",
            address: "456 Innovation Dr, San Francisco, CA"
        },
        paymentTerms: "Net 45",
        creditLimit: 750000,
        totalSales: 2100000,
        invoices: [
            { id: "INV-2025-101", issueDate: "2025-10-25", currency: "USD", amount: 75000, dueDate: "2025-12-09", status: "open" },
            { id: "INV-2025-102", issueDate: "2025-09-28", currency: "USD", amount: 85000, dueDate: "2025-11-12", status: "overdue" },
            { id: "INV-2025-103", issueDate: "2025-08-30", currency: "USD", amount: 50000, dueDate: "2025-10-14", status: "overdue" }
        ]
    },
    3: {
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
        lastActivity: "2025-11-16 • Payment received",
        contact: {
            email: "michael.chen@scripps.com",
            phone: "+1-555-0103",
            address: "789 Broadcast Ave, Chicago, IL"
        },
        paymentTerms: "Net 15",
        creditLimit: 1000000,
        totalSales: 3500000,
        invoices: [
            { id: "INV-2025-201", issueDate: "2025-11-01", currency: "USD", amount: 85000, dueDate: "2025-11-16", status: "paid" }
        ]
    },
    4: {
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
        lastActivity: "2025-11-15 • Dispute open",
        contact: {
            email: "lisa.garcia@blueant.tv",
            phone: "+1-555-0104",
            address: "321 Entertainment Blvd, Los Angeles, CA"
        },
        paymentTerms: "Net 30",
        creditLimit: 300000,
        totalSales: 850000,
        invoices: [
            { id: "INV-2025-301", issueDate: "2025-10-20", currency: "USD", amount: 40000, dueDate: "2025-11-19", status: "open" },
            { id: "INV-2025-302", issueDate: "2025-09-22", currency: "USD", amount: 45000, dueDate: "2025-10-22", status: "overdue" },
            { id: "INV-2025-303", issueDate: "2025-08-25", currency: "USD", amount: 50000, dueDate: "2025-09-24", status: "dispute" },
            { id: "INV-2025-304", issueDate: "2025-07-28", currency: "USD", amount: 40000, dueDate: "2025-08-27", status: "dispute" }
        ]
    },
    5: {
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
        lastActivity: "2025-11-14 • Call logged",
        contact: {
            email: "robert.kim@hasbro.com",
            phone: "+1-555-0105",
            address: "654 Toy Lane, Providence, RI"
        },
        paymentTerms: "Net 60",
        creditLimit: 800000,
        totalSales: 2800000,
        invoices: [
            { id: "INV-2025-401", issueDate: "2025-10-30", currency: "USD", amount: 50000, dueDate: "2025-12-29", status: "open" },
            { id: "INV-2025-402", issueDate: "2025-09-15", currency: "USD", amount: 70000, dueDate: "2025-11-14", status: "overdue" },
            { id: "INV-2025-403", issueDate: "2025-08-10", currency: "USD", amount: 80000, dueDate: "2025-10-09", status: "overdue" },
            { id: "INV-2025-404", issueDate: "2025-07-05", currency: "USD", amount: 60000, dueDate: "2025-09-03", status: "overdue" },
            { id: "INV-2025-405", issueDate: "2025-06-01", currency: "USD", amount: 40000, dueDate: "2025-07-31", status: "overdue" }
        ]
    }
};

// Initialize the details page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Customer details page loaded');
    loadCustomerData();
    setupEventListeners();
});

// Get customer ID from URL
function getCustomerIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = parseInt(urlParams.get('id'));
    
    console.log('URL Customer ID:', customerId);
    
    if (!customerId || !customerData[customerId]) {
        console.warn('Invalid customer ID, defaulting to customer 1');
        return 1;
    }
    
    return customerId;
}

// Load customer data based on URL parameter
function loadCustomerData() {
    const customerId = getCustomerIdFromURL();
    console.log('Loading customer data for ID:', customerId);
    
    const customer = customerData[customerId];
    
    if (!customer) {
        console.error('Customer not found for ID:', customerId);
        showErrorState();
        return;
    }

    console.log('Customer data found:', customer);
    updatePageContent(customer);
}

// Show error state if customer not found
function showErrorState() {
    document.getElementById('customerName').textContent = 'Customer Not Found';
    document.getElementById('customerKPIs').innerHTML = `
        <div class="kpi">
            <div class="label">Error</div>
            <div class="value">Not Found</div>
            <div class="small-muted">Customer ID not recognized</div>
        </div>
    `;
}

// Update all page content with customer data
function updatePageContent(customer) {
    console.log('Updating page content for:', customer.name);
    
    // Update page title
    document.title = `${customer.name} — Customer Details — Amagi AR`;

    // Update header
    document.getElementById('customerName').textContent = customer.name;
    
    // Update tags
    const tagsContainer = document.getElementById('customerTags');
    tagsContainer.innerHTML = customer.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');

    // Update KPIs
    document.getElementById('customerKPIs').innerHTML = `
        <div class="kpi">
            <div class="label">Outstanding Balance</div>
            <div class="value">$${customer.outstanding.toLocaleString()}</div>
            <div class="small-muted">Last activity: ${customer.lastActivity.split('•')[0].trim()}</div>
        </div>
        <div class="kpi">
            <div class="label">Avg Payment Delay</div>
            <div class="value">${customer.dso} days</div>
        </div>
        <div class="kpi">
            <div class="label">Current DSO</div>
            <div class="value">${customer.dso} days</div>
        </div>
        <div class="kpi">
            <div class="label">Credit Terms</div>
            <div class="value">${customer.paymentTerms}</div>
        </div>
    `;

    // Update right panel information
    document.getElementById('customerExternalId').textContent = customer.externalId;
    document.getElementById('customerHealthScore').innerHTML = `<span class="pill ${getHealthScoreClass(customer.healthScore)}">${customer.healthScore}</span>`;
    document.getElementById('customerCollectionStatus').innerHTML = `<span class="pill ${getStatusClass(customer.collectionStatus)}">${customer.collectionStatus}</span>`;
    document.getElementById('customerLastActivity').textContent = customer.lastActivity;
    document.getElementById('customerOpenInvoices').textContent = customer.openInvoices;
    document.getElementById('customerPaymentTerms').textContent = customer.paymentTerms;
    document.getElementById('customerCreditLimit').textContent = `$${customer.creditLimit.toLocaleString()}`;

    // Update contact information
    document.getElementById('customerEmail').textContent = customer.contact.email;
    document.getElementById('customerPhone').textContent = customer.contact.phone;
    document.getElementById('customerAddress').textContent = customer.contact.address;
    document.getElementById('customerTotalSales').textContent = `$${customer.totalSales.toLocaleString()}`;

    // Update aging chart
    updateAgingChart(customer);
    
    // Update invoices
    updateInvoicesTable(customer);

    // Update collection notes
    updateCollectionNotes(customer);
    
    console.log('Page content updated successfully');
}

// Update aging chart
function updateAgingChart(customer) {
    const agingBars = document.getElementById('agingBars');
    const agingPeriods = ['1-30', '31-60', '61-90', '91-120', '121-180', '>180'];
    const colors = ['#28a745', '#2d8bd6', '#f7b500', '#ff6347', '#6f42c1', '#d9534f'];
    
    // Find max value for scaling
    const maxAging = Math.max(...Object.values(customer.aging));
    
    agingBars.innerHTML = agingPeriods.map((period, index) => {
        const amount = customer.aging[period];
        const height = maxAging > 0 ? (amount / maxAging) * 140 : 0;
        return `
            <div class="bar">
                <div style="width:36px;height:${height}px;background:${colors[index]};border-radius:6px"></div>
                <div class="legend small-muted">${period} days<br><strong>$${(amount/1000).toFixed(0)}k</strong></div>
            </div>
        `;
    }).join('');

    document.getElementById('totalOutstanding').textContent = `$${customer.outstanding.toLocaleString()}`;
    document.getElementById('totalOverdue').textContent = `$${customer.overdue.toLocaleString()}`;
    document.getElementById('agingAsOfDate').textContent = `As of ${new Date().toISOString().split('T')[0]}`;
}

// Update invoices table
function updateInvoicesTable(customer) {
    const invoicesBody = document.getElementById('invoicesBody');
    
    invoicesBody.innerHTML = customer.invoices.map(invoice => {
        const statusClass = getInvoiceStatusClass(invoice.status);
        const statusText = getInvoiceStatusText(invoice.status);
        return `
            <tr>
                <td>${invoice.id}</td>
                <td>${invoice.issueDate}</td>
                <td>${invoice.currency}</td>
                <td>$${invoice.amount.toLocaleString()}</td>
                <td>${invoice.dueDate}</td>
                <td><span class="status-pill ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    }).join('');
}

// Update collection notes
function updateCollectionNotes(customer) {
    const notesContainer = document.getElementById('collectionNotes');
    let notes = [];
    
    if (customer.overdue > 0) {
        notes.push(`Send reminder for $${customer.overdue.toLocaleString()} overdue amount`);
    }
    
    if (customer.healthScore <= 2) {
        notes.push(`High priority: Health score is ${customer.healthScore}/5`);
    }
    
    if (customer.collectionStatus === 'Dispute') {
        notes.push(`Active dispute - follow up with legal team`);
    }
    
    if (customer.collectionStatus === 'Escalation') {
        notes.push(`Escalated case - senior collector assigned`);
    }
    
    // Default note
    if (notes.length === 0) {
        notes.push(`Regular follow-up scheduled`);
        notes.push(`Next review: ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}`);
    }
    
    notesContainer.innerHTML = notes.map(note => `<li>${note}</li>`).join('');
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Tab switching logic
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            console.log('Tab clicked:', this.dataset.tab);
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const key = this.dataset.tab;
            
            // Hide all panels
            document.querySelectorAll('#tab-content > div').forEach(p => {
                p.style.display = 'none';
            });
            
            // Show selected panel
            const panel = document.getElementById(key + '-panel');
            if (panel) {
                panel.style.display = 'block';
                console.log('Showing panel:', key + '-panel');
            }
        });
    });

    // Invoice search
    const invoiceSearch = document.getElementById('invoiceSearch');
    if (invoiceSearch) {
        invoiceSearch.addEventListener('input', function(e) {
            const q = e.target.value.toLowerCase().trim();
            console.log('Searching invoices for:', q);
            document.querySelectorAll('#invoicesTable tbody tr').forEach(row => {
                const display = row.innerText.toLowerCase().includes(q) ? '' : 'none';
                row.style.display = display;
            });
        });
    }
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

function getInvoiceStatusClass(status) {
    switch(status) {
        case 'paid': return 'status-paid';
        case 'open': return 'status-open';
        case 'overdue': return 'status-overdue';
        case 'dispute': return 'status-dispute';
        default: return 'status-open';
    }
}

function getInvoiceStatusText(status) {
    switch(status) {
        case 'paid': return 'Paid';
        case 'open': return 'Open';
        case 'overdue': return 'Overdue';
        case 'dispute': return 'Dispute';
        default: return 'Open';
    }
}

console.log('Customer details script loaded');