export const permissions = [
    {
        role: 'user',
        actions: [
            'createLeakform',

        ]
    },
    {
        role: 'plumber',
        actions: [
            'getLeakforms',
            'getLeakform'
        ]
    },
    {
        role: 'Admin',
        actions: [
            'getLeakforms',
            'getLeakform',
            'getReports',
            'getReportById',
            'updateReport',
            'deleteReport'
        ]
    }
]